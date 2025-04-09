import cv2
import numpy as np
from deepface import DeepFace
import os
import time

# Config
MODEL = "ArcFace"
DETECTOR = "retinaface"
LIVE_CAPTURE_COUNT = 5
EMBEDDING_PATH = "embeddings/optimized_embedding.npy"
THRESHOLD = 0.7  # Adjust based on tests

def load_embedding(file_path=EMBEDDING_PATH):
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Stored embedding not found at {file_path}")
    embedding = np.load(file_path)
    # Optional: you can validate shape here
    if embedding.shape[0] != 512:
        raise ValueError(f"Invalid embedding shape: expected 512, got {embedding.shape[0]}")
    return embedding

def capture_live_embeddings(count=LIVE_CAPTURE_COUNT):
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        raise Exception("Webcam not available")

    print(f"📸 Capturing {count} live frames for verification. Please hold still!")
    live_embeddings = []
    captured = 0

    while captured < count:
        ret, frame = cap.read()
        if not ret:
            print("Failed to capture frame. Skipping...")
            continue

        try:
            result = DeepFace.represent(
                img_path=frame.copy(),
                model_name=MODEL,
                enforce_detection=True,
                detector_backend=DETECTOR
            )
            if result and isinstance(result, list):
                live_embeddings.append(np.array(result[0]['embedding']))
                captured += 1
                print(f"✅ Captured live frame {captured}/{count}")
            else:
                print("⚠️ No face detected in this frame.")
        except Exception as e:
            print(f"🚫 Error capturing live frame {captured + 1}: {e}")

        time.sleep(0.3)

    cap.release()
    cv2.destroyAllWindows()

    if not live_embeddings:
        raise Exception("No live embeddings captured. Try again.")

    return np.array(live_embeddings)

def verify_identity(stored_embedding, live_embeddings, threshold=THRESHOLD):
    # Average the live embeddings
    live_avg = np.mean(live_embeddings, axis=0)
    distance = np.linalg.norm(stored_embedding - live_avg)
    print(f"🔍 Euclidean distance between stored and live: {distance:.4f}")
    return distance < threshold

def main():
    try:
        stored_embedding = load_embedding()
        live_embeddings = capture_live_embeddings()
        
        if verify_identity(stored_embedding, live_embeddings):
            print("✅ Match verified! Same person.")
        else:
            print("❌ Verification failed. Not the same person.")
    except Exception as e:
        print("❌ Something went wrong during verification:", e)

if __name__ == "__main__":
    main()
