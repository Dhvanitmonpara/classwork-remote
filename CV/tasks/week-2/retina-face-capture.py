from deepface import DeepFace
import cv2
import os
import time

face_capture = None
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

person_name = input("Enter your name: ")

def ensure_dir(path):
  if not os.path.exists(path):
    os.makedirs(path)

def extract_face(img):
  img = DeepFace.extract_faces(img, detector_backend="retinaface")
  for face in img:
      return face["face"]

cap = cv2.VideoCapture(0)
while cap.isOpened():
  ret, frame = cap.read()
  original_frame = frame.copy()
  gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

  faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

  for (x, y, w, h) in faces:
    cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
    cv2.putText(frame, str(len(faces)) + " face(s) detected", (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

  key = cv2.waitKey(1) & 0xFF
  if key == ord('q'):
    break
  elif key == ord('c'):
     face_capture = original_frame
     break

  cv2.imshow("Webcam", frame)

cap.release()

cropped_face = extract_face(face_capture)
if cropped_face.max() <= 1.0:  # Only scale if in [0, 1]
    cropped_face = (cropped_face * 255).astype("uint8")
ensure_dir(f"db/faces/{person_name}")
cv2.imwrite(f"db/faces/{person_name}/face_{int(time.time())}.jpg", cropped_face)
cv2.imshow("Face", cropped_face)
cv2.waitKey(0)
cv2.destroyAllWindows()