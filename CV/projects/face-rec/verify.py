import cv2
import numpy as np
from deepface import DeepFace
import os
import time
import logging

# Configuration
FACE_CASCADE_PATH = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
MODEL = "ArcFace"
DETECTOR = "retinaface"
EMBEDDING_PATH = "data/optimized_embedding.npy"
THRESHOLD = 0.7
MIN_FACE_PERCENT = 0.10
CENTER_THRESHOLD = 0.5
ASPECT_RATIO = 0.7
ASPECT_TOLERANCE = 0.3

# Configure logging
logging.basicConfig(
    filename='face_verification.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

class FaceVerifier:
    def __init__(self):
        self.stored_embedding = self.load_embedding()
        self.face_cascade = cv2.CascadeClassifier(FACE_CASCADE_PATH)
        self.last_recognition = 0
        self.recognition_cooldown = 0.5
        self.last_conditions = [False, False, False]
        logging.info("FaceVerifier initialized")

    def load_embedding(self):
        if not os.path.exists(EMBEDDING_PATH):
            logging.error("Embedding file not found")
            raise FileNotFoundError(f"Embedding file not found at {EMBEDDING_PATH}")
        
        embedding = np.load(EMBEDDING_PATH)
        if embedding.shape != (512,):
            logging.error("Invalid embedding shape")
            raise ValueError("Invalid embedding shape")
        
        logging.info("Embedding loaded successfully")
        return embedding

    def is_good_condition(self, frame, face):
        x, y, w, h = face
        height, width = frame.shape[:2]
        
        # Face size check
        face_area_percent = h / height
        size_ok = face_area_percent >= MIN_FACE_PERCENT

        # Position check (more lenient)
        x_center = x + w/2
        y_center = y + h/2
        x_offset = abs(x_center - width/2) / (width/2)
        y_offset = abs(y_center - height/2) / (height/2)
        position_ok = (x_offset < CENTER_THRESHOLD) and (y_offset < CENTER_THRESHOLD)

        # Aspect ratio check (range-based)
        aspect_ratio = w / h
        # ratio_ok = abs(aspect_ratio - ASPECT_RATIO) < ASPECT_TOLERANCE
        ratio_ok = 0.5 <= aspect_ratio <= 1.0  # Wider valid range
        
        self.last_conditions = [size_ok, position_ok, ratio_ok]
        return all(self.last_conditions)

    def verify_frame(self, frame):
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = self.face_cascade.detectMultiScale(
            gray,
            scaleFactor=1.1,
            minNeighbors=5,
            minSize=(60, 60)
        )
        
        best_face = None
        recognition_status = False
        verification_attempted = False
        distance = None
        
        if len(faces) > 0:
            logging.debug(f"Detected {len(faces)} faces")
            best_face = max(faces, key=lambda f: f[2]*f[3])
            x, y, w, h = best_face
            
            if self.is_good_condition(frame, best_face):
                logging.debug("All conditions met")
                if time.time() - self.last_recognition > self.recognition_cooldown:
                    verification_attempted = True
                    try:
                        face_img = frame[y:y+h, x:x+w]
                        result = DeepFace.represent(
                            img_path=face_img,
                            model_name=MODEL,
                            enforce_detection=False,
                            detector_backend=DETECTOR
                        )
                        if result:
                            live_embed = np.array(result[0]['embedding'])
                            distance = np.linalg.norm(self.stored_embedding - live_embed)
                            recognition_status = distance < THRESHOLD
                            self.last_recognition = time.time()
                            log_msg = f"Verification {'SUCCESS' if recognition_status else 'FAIL'} - Distance: {distance:.4f}"
                            logging.info(log_msg)
                    except Exception as e:
                        logging.error(f"Recognition error: {str(e)}")
            else:
                cond_status = ["Size", "Position", "Aspect"]
                failed = [cond for cond, ok in zip(cond_status, self.last_conditions) if not ok]
                logging.debug(f"Conditions failed: {', '.join(failed)}")
        
        return best_face, recognition_status, verification_attempted, distance

def main():
    verifier = FaceVerifier()
    cap = cv2.VideoCapture(0)
    
    if not cap.isOpened():
        logging.error("Failed to open webcam")
        print("Error: Could not open webcam")
        return

    logging.info("Starting verification process")
    print("Starting face verification...")
    
    while True:
        ret, frame = cap.read()
        if not ret:
            logging.warning("Failed to capture frame")
            break

        frame = cv2.flip(frame, 1)
        display_frame = frame.copy()
        
        best_face, recognized, attempted, distance = verifier.verify_frame(frame)
        
        if best_face is not None:
            x, y, w, h = best_face
            conditions = verifier.last_conditions
            
            # Status colors and text
            if recognized:
                color = (0, 255, 0)  # Green
                status_text = "VERIFIED"
            elif attempted:
                color = (255, 255, 0)  # Yellow
                status_text = f"CHECKING... ({distance:.2f})" if distance else "CHECKING..."
            else:
                color = (0, 165, 255)  # Orange
                status_text = "ADJUST POSE"
            
            # Draw face rectangle
            cv2.rectangle(display_frame, (x, y), (x+w, y+h), color, 2)
            
            # Status text
            cv2.putText(display_frame, status_text, (x, y-10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.8, color, 2)
            
            # Condition indicators
            cond_texts = [
                f"Size: {'OK' if conditions[0] else 'Too small'}",
                f"Position: {'OK' if conditions[1] else 'Off-center'}",
                f"Aspect: {'OK' if conditions[2] else 'Bad angle'}"
            ]
            
            for i, text in enumerate(cond_texts):
                text_color = (0, 255, 0) if conditions[i] else (0, 0, 255)
                y_pos = 30 + 30*i
                cv2.putText(display_frame, text, (10, y_pos),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.6, text_color, 2)
        else:
            cv2.putText(display_frame, "NO FACE DETECTED", (10, 30),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)

        # Display frame
        cv2.imshow('Face Verification', display_frame)
        
        # Exit on 'q' press
        if cv2.waitKey(1) & 0xFF == ord('q'):
            logging.info("User terminated verification")
            break

    cap.release()
    cv2.destroyAllWindows()
    logging.info("Verification process ended")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        logging.critical(f"Critical error: {str(e)}")
        print(f"Critical error: {str(e)}")