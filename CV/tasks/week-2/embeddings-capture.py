from deepface import DeepFace
import cv2
import os
import time
import numpy as np

image_list = []
face_status = [None, None, None, None]
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
person_name = input("Enter your name: ")
counter = 0

def is_too_dark(img, threshold=50):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    return gray.mean() < threshold

def is_face_large_enough(face_bbox, frame_shape, min_ratio=0.1):
    _, _, w, h = face_bbox
    face_area = w * h
    frame_area = frame_shape[0] * frame_shape[1]
    return (face_area / frame_area) >= min_ratio

def is_face_centered(face_bbox, frame_shape, tolerance=0.2):
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

def ensure_dir(path):
  if not os.path.exists(path):
    os.makedirs(path)
    
def handle_embeddings(image_list):
  ensure_dir(f"db/faces/{person_name}")
  for idx, image in enumerate(image_list):
    embedding = DeepFace.represent(img_path=image, model_name="ArcFace", detector_backend='retinaface')[0]["embedding"]
    np.save(f"db/faces/{person_name}/embedding_{idx+1}.npy", embedding)
    print(f"[ OK ] Embedding saved at db/faces/{person_name}/embedding_{idx+1}.npy")

try:

  print("[ - ] Capturing face...")

  cap = cv2.VideoCapture(0)
  while cap.isOpened():
    ret, frame = cap.read()
    original_frame = frame.copy()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    for (x, y, w, h) in faces:
      cv2.putText(frame, str(len(faces)) + " face(s) detected", (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
      cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
      face_status[0] = is_face_large_enough(faces[0], frame.shape)
      face_status[1] = is_face_centered(faces[0], frame.shape)
      face_status[2] = not is_image_blurry(frame[y:y+h, x:x+w])
      face_status[3] = not is_too_dark(frame[y:y+h, x:x+w])

    if face_status[0] and face_status[1] and face_status[2] and face_status[3]:
      image_list.append(original_frame)
      counter += 1
      if counter >= 5: break
    else:
      cv2.putText(frame, f"Face large enough: {face_status[0]}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
      cv2.putText(frame, f"Face centered: {face_status[1]}", (10, 55), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
      cv2.putText(frame, f"Face not blurry: {face_status[2]}", (10, 80), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
      cv2.putText(frame, f"Light enough: {face_status[3]}", (10, 105), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)

    key = cv2.waitKey(1) & 0xFF
    if key == ord('q'):
      break
    elif key == ord('c'):
      image_list.append(original_frame)
      counter += 1
      if counter >= 5: break

    cv2.imshow("Webcam", frame)

  cap.release()
  cv2.destroyAllWindows()

  print("[ OK ] Total faces captured:", len(image_list))

  handle_embeddings(image_list)
  print("[ OK ] Face captured successfully")

except Exception as e:
  print(f"[ X ] Error: {e}")