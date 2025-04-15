# ==== imports ====
import os
import cv2
import numpy as np
from deepface import DeepFace

# ==== config ====
IMAGE_COUNT = 10
IMAGE_SAVE_DIR = "captured_images"
EMBEDDING_PATH = "data/optimized_embedding.npy"
MODEL = "ArcFace"
DETECTOR = "retinaface"
OUTLIER_STD_THRESHOLD = 1.0

# ==== utility ====
def ensure_dir(path):
    if not os.path.exists(path):
        os.makedirs(path)

def is_blurry(image, threshold=100):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    return cv2.Laplacian(gray, cv2.CV_64F).var() < threshold


# ==== Phase 1: Smart Capture ====
def capture_images_smart(count=IMAGE_COUNT, save_dir=IMAGE_SAVE_DIR):
    ensure_dir(save_dir)
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        raise Exception("Webcam not available")

    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    print("🎥 Webcam started. Press 'c' to capture, 'q' to quit.")

    captured = 0
    while captured < count:
        ret, frame = cap.read()
        if not ret:
            print("⚠️ Frame grab failed.")
            continue

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.1, 5)

        if len(faces) == 0:
            cv2.putText(frame, "👀 Please look at the camera bruhh", (30, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
        else:
            for (x, y, w, h) in faces:
                roi = frame[y:y+h, x:x+w]
                if is_blurry(roi):
                    color, label = (0, 0, 255), "🚫 Too blurry"
                else:
                    color, label = (0, 255, 0), "✅ Good! Press 'c'"

                cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
                cv2.putText(frame, label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, color, 2)

        cv2.imshow("Smart Capture", frame)

        key = cv2.waitKey(1) & 0xFF
        if key == ord('q'):
            break
        elif key == ord('c') and len(faces) > 0:
            for (x, y, w, h) in faces:
                roi = frame[y:y+h, x:x+w]
                if not is_blurry(roi):
                    filename = os.path.join(save_dir, f"image_{captured:03d}.jpg")
                    cv2.imwrite(filename, frame)
                    print(f"✅ Captured {captured+1}/{count}")
                    captured += 1
                    break

    cap.release()
    cv2.destroyAllWindows()


# ==== Phase 2: Process Images ====
def process_images_for_embedding(image_dir=IMAGE_SAVE_DIR, model=MODEL, detector=DETECTOR):
    image_files = [os.path.join(image_dir, f) for f in os.listdir(image_dir) if f.endswith(".jpg")]
    if not image_files:
        raise Exception("No images found in capture directory.")

    embeddings = []
    print("📦 Processing captured images...")
    for idx, image_path in enumerate(image_files):
        try:
            result = DeepFace.represent(img_path=image_path, model_name=model, enforce_detection=True, detector_backend=detector)
            if result and isinstance(result, list):
                embeddings.append(np.array(result[0]['embedding']))
                print(f"✅ {idx+1}/{len(image_files)} processed.")
        except Exception as e:
            print(f"🚫 Error with {image_path}: {e}")

    if not embeddings:
        raise Exception("No valid embeddings extracted.")
    
    embeddings = [e / np.linalg.norm(e) for e in embeddings]

    return np.array(embeddings)


# ==== Phase 3: Optimize Embedding ====
def optimize_embedding(embeddings, threshold=OUTLIER_STD_THRESHOLD):
    mean = np.mean(embeddings, axis=0)
    dists = np.linalg.norm(embeddings - mean, axis=1)
    std = np.std(dists)

    inliers = embeddings[dists < threshold * std]
    if not len(inliers):
        print("⚠️ All embeddings considered outliers.")
        return mean
    
    print(f"✨ Using {len(inliers)} inlier embeddings.")
    return np.mean(inliers, axis=0)

# ==== Phase 4: Save ====
def save_embedding(embedding, path=EMBEDDING_PATH):
    ensure_dir(os.path.dirname(path))
    np.save(path, embedding)
    print(f"💾 Embedding saved at {path}")


# ==== Main Orchestration ====
def main():
    try:
        capture_images_smart()
        embeddings = process_images_for_embedding()
        optimized = optimize_embedding(embeddings)
        save_embedding(optimized)
        print("✅ All done. Optimized embedding ready.")
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    main()
