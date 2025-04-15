import cv2
import os

def ensure_dir(path):
  if not os.path.exists(path):
    os.makedirs(path)

db_path = 'db/faces'
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

name = input("Enter your name: ")
cap = cv2.VideoCapture(0)
counter = 0

while cap.isOpened():
  ret, frame = cap.read()

  gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
  faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

  key = cv2.waitKey(1) & 0xFF
  if key == ord('q'):
    break
  elif key == ord('s'):
    if counter <= 10:
      biggest = sorted(faces, key=lambda f: f[2]*f[3], reverse=True)[0]
      (x, y, w, h) = biggest
      face = frame[y:y+h, x:x+w]
      filename = f"{db_path}/{name}/face_{counter}.jpg"
      ensure_dir(f"{db_path}/{name}")
      cv2.imwrite(filename, face)
      print(f"[+] Saved {filename}")
      if counter < 10: counter += 1
  
  if len(faces) > 0:
    biggest = sorted(faces, key=lambda f: f[2]*f[3], reverse=True)[0]
    (x, y, w, h) = biggest
    if counter >= 10: cv2.putText(frame, "Storage is full", (15, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 3)
    cv2.putText(frame, f"Saved {counter} images for {name}", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
  cv2.imshow("webcam", frame)

cap.release()
cv2.destroyAllWindows()