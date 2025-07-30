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
THRESHOLD = 0.6
MIN_FACE_PERCENT = 0.10
CENTER_THRESHOLD = 0.5
ASPECT_RATIO = 0.7
ASPECT_TOLERANCE = 0.3

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
            raise FileNotFoundError(f"Embedding file not found at {EMBEDDING_PATH}")
        embedding = np.load(EMBEDDING_PATH)
        if embedding.shape != (512,):
            raise ValueError("Invalid embedding shape")
        return embedding

    def is_good_condition(self, frame, face):
        x, y, w, h = face
        height, width = frame.shape[:2]
        
        face_area_percent = h / height
        size_ok = face_area_percent >= MIN_FACE_PERCENT

        x_center = x + w/2
        y_center = y + h/2
        x_offset = abs(x_center - width/2) / (width/2)
        y_offset = abs(y_center - height/2) / (height/2)
        position_ok = (x_offset < CENTER_THRESHOLD) and (y_offset < CENTER_THRESHOLD)

        aspect_ratio = w / h
        ratio_ok = 0.5 <= aspect_ratio <= 1.0
        
        self.last_conditions = [size_ok, position_ok, ratio_ok]
        return all(self.last_conditions)

    def verify_frame(self, frame):
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = self.face_cascade.detectMultiScale(
            gray, scaleFactor=1.1, minNeighbors=5, minSize=(60, 60))
        
        best_face, distance = None, None
        if len(faces) > 0:
            best_face = max(faces, key=lambda f: f[2]*f[3])
            if self.is_good_condition(frame, best_face):
                if time.time() - self.last_recognition > self.recognition_cooldown:
                    try:
                        result = DeepFace.represent(
                            img_path=frame,
                            model_name=MODEL,
                            enforce_detection=True,
                            detector_backend=DETECTOR
                        )
                        if result:
                            live_embed = np.array(result[0]['embedding'])
                            if live_embed.shape != (512,):
                                logging.warning(f"Invalid embedding shape: {live_embed.shape}")
                                return best_face, None
                            distance = np.linalg.norm(self.stored_embedding - live_embed)
                            self.last_recognition = time.time()
                    except Exception as e:
                        logging.error(f"Recognition error: {str(e)}")
        return best_face, distance

class RecognitionState:
    def __init__(self):
        self.status = "INITIALIZING"
        self.collected_frames = 0
        self.distances = []
    
    def update(self, distance):
        if distance is not None:
            self.distances.append(distance)
            self.collected_frames += 1
            self.status = f"COLLECTING ({self.collected_frames}/5)"
            
            if self.collected_frames >= 5:
                self.status = "PROCESSING RESULTS"
                return True
        return False

def main():
    verifier = FaceVerifier()
    state = RecognitionState()
    cap = cv2.VideoCapture(0)
    
    if not cap.isOpened():
        print("Error: Could not open webcam")
        return

    print("Starting face verification...")
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break

        frame = cv2.flip(frame, 1)
        display_frame = frame.copy()
        
        best_face, distance = verifier.verify_frame(frame)
        collection_complete = state.update(distance)
        
        # Visualization
        if best_face is not None:
            x, y, w, h = best_face
            conditions = verifier.last_conditions
            
            # Status colors
            color_map = {
                "INITIALIZING": (0, 165, 255),
                "COLLECTING": (0, 255, 255),
                "PROCESSING RESULTS": (255, 255, 0)
            }
            color = color_map.get(state.status.split()[0], (0, 165, 255))
            
            # Draw face rectangle and status
            cv2.rectangle(display_frame, (x, y), (x+w, y+h), color, 2)
            cv2.putText(display_frame, state.status, (x, y-10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.8, color, 2)
            
            # Condition indicators
            cond_texts = [
                f"Size: {'OK' if conditions[0] else 'Too small'}",
                f"Position: {'OK' if conditions[1] else 'Off-center'}",
                f"Aspect: {'OK' if conditions[2] else 'Bad angle'}"
            ]
            for i, text in enumerate(cond_texts):
                text_color = (0, 255, 0) if conditions[i] else (0, 0, 255)
                cv2.putText(display_frame, text, (10, 30 + 30*i),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.6, text_color, 2)
        else:
            cv2.putText(display_frame, "NO FACE DETECTED", (10, 30),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)

        cv2.imshow('Face Verification', display_frame)
        
        if cv2.waitKey(1) & 0xFF == ord('q') or collection_complete:
            break

    cap.release()
    cv2.destroyAllWindows()

    if state.collected_frames >= 5:
        avg_distance = np.mean(state.distances)
        result = avg_distance < THRESHOLD
        print("\nVerification Result:")
        print(f"Average Distance: {avg_distance:.4f}")
        print(f"Threshold: {THRESHOLD}")
        print("Status:", "VERIFIED" if result else "NOT VERIFIED")
    else:
        print("\nVerification failed to collect enough valid frames")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        logging.critical(f"Critical error: {str(e)}")
        print(f"Critical error: {str(e)}")