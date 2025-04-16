import cv2
from deepface import DeepFace
import os
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

VERIFICATION_THRESHOLD = 0.55 # more number = more strict
FACE_DISTANCE_RATIO = 0.05 # more number = less distance
FACE_CENTER_TOLERANCE=0.2 # more number = less tolerance

face_status = [None, None, None, None]
face_captures = []
cap = cv2.VideoCapture(1)
path = 'db/faces'
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

def fix_brightness_if_needed(img, dark_threshold=70, bright_threshold=200):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    mean_brightness = gray.mean()

    if mean_brightness < dark_threshold:
        # Too dark – brighten it up
        print("[⚡] Brightening image...")
        return cv2.convertScaleAbs(img, alpha=1.3, beta=30)
    elif mean_brightness > bright_threshold:
        # Too bright – tone it down
        print("[⚡] Dimming image...")
        return cv2.convertScaleAbs(img, alpha=0.9, beta=-30)
    
    # Looks good already
    return img

def upscale_face(img, scale=2):
    return cv2.resize(img, (img.shape[1] * scale, img.shape[0] * scale), interpolation=cv2.INTER_CUBIC)

def is_face_too_small(face_img, min_width=100, min_height=100):
    return face_img.shape[1] < min_width or face_img.shape[0] < min_height

def is_too_dark(img, threshold=50):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    return gray.mean() < threshold

def is_face_large_enough(face_bbox, frame_shape, min_ratio=FACE_DISTANCE_RATIO):
    _, _, w, h = face_bbox
    face_area = w * h
    frame_area = frame_shape[0] * frame_shape[1]
    return (face_area / frame_area) >= min_ratio

def is_face_centered(face_bbox, frame_shape, tolerance=FACE_CENTER_TOLERANCE):
    x, y, w, h = face_bbox
    face_center_x = x + w // 2
    face_center_y = y + h // 2

    frame_center_x = frame_shape[1] // 2
    frame_center_y = frame_shape[0] // 2

    dx = abs(face_center_x - frame_center_x) / frame_shape[1]
    dy = abs(face_center_y - frame_center_y) / frame_shape[0]

    return dx <= tolerance and dy <= tolerance

def is_image_blurry(img, threshold=100.0):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    laplacian_var = cv2.Laplacian(gray, cv2.CV_64F).var()
    return laplacian_var < threshold

def get_all_embedding_paths(folder_path):
    files = os.listdir(folder_path)
    npy_files = [os.path.join(folder_path, f) for f in files if f.lower().endswith(".npy")]
    npy_files.sort()  # Optional: sort by filename
    if not npy_files:
        raise Exception("No numpy embeddings files found in the folder.")
    return npy_files

def normalize_embedding(embedding):
    return embedding / np.linalg.norm(embedding)

# Usage:
person_name = input("Enter your name: ")
reference_folder = os.path.join("db/faces", person_name)

if not os.path.exists(reference_folder):
    print("[ X ] No folder found for this user.")
    exit()

def verify_face(faces):
    reference_paths = get_all_embedding_paths(reference_folder)
    all_similarities = []

    for face_idx, face in enumerate(faces):
        try:
            live_face = DeepFace.represent(img_path=face, model_name="ArcFace", detector_backend='retinaface')[0]["embedding"]
        except Exception as e:
            print(f"[ X ] Could not extract embedding for face {face_idx+1}: {e}")
            continue

        if live_face is None:
            continue

        for ref_idx, embedding_path in enumerate(reference_paths):
            reference_embedding = np.load(embedding_path)
            similarity = cosine_similarity([live_face], [reference_embedding])[0][0]
            all_similarities.append(similarity)
            print(f"[ OK ] Compared face {face_idx+1} with reference {ref_idx+1}: {similarity:.4f}")

    if not all_similarities:
        return {"distance": 0, "verified": False}

    # Sort all similarities, get top 3, and average them
    top_k = sorted(all_similarities, reverse=True)[:7]
    avg_top_k = sum(top_k) / len(top_k)

    return {"distance": avg_top_k, "verified": avg_top_k > VERIFICATION_THRESHOLD}

print("[ # ] Capturing face...")

try:
  while cap.isOpened():
    ret, frame = cap.read()
    if ret:
      gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
      faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
      
    #   if is_face_too_small(face):
    #     print(f"[ # ] Upscaling face {len(faces)} due to small size")
    #     face = upscale_face(face, scale=2)
            
      # for (x, y, w, h) in faces:
      #   face_roi = frame[y:y+h, x:x+w]
      #   status = [
      #       is_face_large_enough((x, y, w, h), frame.shape),
      #       is_face_centered((x, y, w, h), frame.shape),
      #       not is_image_blurry(face_roi),
      #       not is_too_dark(face_roi)
      #   ]
        
      #   if all(status):
      #       face_capture = frame
      #       break
      #   else:
      #       face_status = status

      for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
        face_status[0] = is_face_large_enough(faces[0], frame.shape)
        face_status[1] = is_face_centered(faces[0], frame.shape)
        face_status[2] = not is_image_blurry(frame[y:y+h, x:x+w])
        face_status[3] = not is_too_dark(frame[y:y+h, x:x+w])

      if face_status[0] and face_status[1] and face_status[2] and face_status[3]:
        face_captures.append(frame)
        print(f"[ OK ] Face {len(face_captures)} captured successfully!")
        if len(face_captures) >= 3: break
      else:
        cv2.putText(frame, f"Face large enough: {face_status[0]}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
        cv2.putText(frame, f"Face centered: {face_status[1]}", (10, 55), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
        cv2.putText(frame, f"Face not blurry: {face_status[2]}", (10, 80), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
        cv2.putText(frame, f"Light enough: {face_status[3]}", (10, 105), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)

      frame = fix_brightness_if_needed(frame)
      cv2.imshow("Webcam", frame)
      key = cv2.waitKey(1) & 0xFF
      if key == ord('q'):
        break

  cap.release()
  cv2.destroyAllWindows()

  if face_captures[0] is None:
    print("[ X ] Face capture failed.")
    exit()

  result = verify_face(face_captures)
  if result["verified"]: print(f"[ OK ] User verified with distance {result['distance']}")
  else: print(f"[ X ] User not verified, distance was {result['distance']}")

except Exception as e:
  print(f"[ X ] Error: {e}")