import cv2
import numpy as np
from deepface import DeepFace
import os
import time

# Configurations
MODEL = "ArcFace"
DETECTOR = "retinaface"
IMAGE_COUNT = 150
IMAGE_SAVE_DIR = "captured_images"
EMBEDDING_PATH = "embeddings/optimized_embedding.npy"
OUTLIER_STD_THRESHOLD = 1.0  # Adjust for filtering outliers

def ensure_dir(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

def capture_images(count=IMAGE_COUNT, save_dir=IMAGE_SAVE_DIR):
    ensure_dir(save_dir)
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        raise Exception("Webcam not available")

    print(f"📸 Starting image capture. Please look at the camera. Capturing {count} images...")
    captured = 0

    while captured < count:
        ret, frame = cap.read()
        if not ret:
            print("Failed to grab frame. Skipping...")
            continue

        # Save the frame to disk
        filename = os.path.join(save_dir, f"image_{captured:03d}.jpg")
        cv2.imwrite(filename, frame)
        captured += 1
        print(f"✅ Captured image {captured}/{count}")

        # Optional: Show the frame briefly (press 'q' to exit early if needed)
        cv2.imshow("Capturing Images", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            print("Exit requested.")
            break
        
        time.sleep(0.1)  # Slight delay to avoid duplicates

    cap.release()
    cv2.destroyAllWindows()
    print(f"✅ Completed capturing images. {captured} images saved to '{save_dir}'.")
    return captured

def process_images_for_embedding(image_dir=IMAGE_SAVE_DIR, model=MODEL, detector=DETECTOR):
    # List all jpg images in the directory
    image_files = [os.path.join(image_dir, f) for f in os.listdir(image_dir) if f.endswith(".jpg")]
    if not image_files:
        raise Exception("No images found for processing. Run the capture phase first.")

    embeddings = []

    print("🔄 Processing images to extract embeddings...")
    for idx, image_path in enumerate(image_files):
        try:
            # DeepFace.represent can now be used with a file path
            result = DeepFace.represent(
                img_path=image_path,
                model_name=model,
                enforce_detection=True,
                detector_backend=detector
            )
            if result and isinstance(result, list):
                embedding = np.array(result[0]['embedding'])
                embeddings.append(embedding)
                print(f"✅ Processed {idx+1}/{len(image_files)}: {image_path}")
            else:
                print(f"⚠️ No face detected in {image_path}.")
        except Exception as e:
            print(f"🚫 Error processing {image_path}: {e}")

    if not embeddings:
        raise Exception("No valid embeddings extracted from images.")

    embeddings = np.array(embeddings)
    return embeddings

def optimize_embedding(embeddings, outlier_std_threshold=OUTLIER_STD_THRESHOLD):
    # Compute the initial mean embedding
    mean_embedding = np.mean(embeddings, axis=0)
    # Calculate distances from the mean embedding
    distances = np.linalg.norm(embeddings - mean_embedding, axis=1)
    std_distance = np.std(distances)
    
    # Filter out embeddings farther than the threshold * standard deviation from the mean
    inliers = embeddings[distances < (outlier_std_threshold * std_distance)]
    
    if len(inliers) == 0:
        print("⚠️ All images considered outliers. Falling back to the original average.")
        return mean_embedding
    
    optimized_embedding = np.mean(inliers, axis=0)
    print(f"✨ Optimized embedding computed using {len(inliers)} inlier images out of {len(embeddings)} total.")
    return optimized_embedding

def save_embedding(embedding, file_path=EMBEDDING_PATH):
    ensure_dir(os.path.dirname(file_path))
    np.save(file_path, embedding)
    print(f"💾 Optimized embedding saved to {file_path}")

def main():
    try:
        # Phase 1: Capture images
        capture_images()

        # Phase 2: Process captured images to compute optimized embedding
        embeddings = process_images_for_embedding()
        optimized_embedding = optimize_embedding(embeddings)
        save_embedding(optimized_embedding)

        print("✅ All done! Your optimized embedding is now ready.")
    
    except Exception as e:
        print("❌ Something went wrong:", e)

if __name__ == "__main__":
    main()
