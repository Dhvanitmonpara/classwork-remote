import cv2
from deepface import DeepFace
import os

face_status = [None, None, None, None]
face_capture = None
cap = cv2.VideoCapture(0)
path = 'db/faces'
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

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

def get_first_image_path(folder_path):
    files = os.listdir(folder_path)
    image_files = [f for f in files if f.lower().endswith((".png", ".jpg", ".jpeg"))]
    image_files.sort()  # Optional: Sort by name
    if not image_files:
        raise Exception("No image files found in the folder.")
    return os.path.join(folder_path, image_files[0])

# Usage:
person_name = input("Enter your name: ")
reference_folder = os.path.join("db/faces", person_name)

if not os.path.exists(reference_folder):
    print("[ X ] No folder found for this user.")
    exit()

reference_img_path = get_first_image_path(reference_folder)

print("[ - ] Capturing face...")

try:
  while cap.isOpened():
    ret, frame = cap.read()
    if ret:
      gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
      faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
      
      for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
        face_status[0] = is_face_large_enough(faces[0], frame.shape)
        face_status[1] = is_face_centered(faces[0], frame.shape)
        face_status[2] = not is_image_blurry(frame[y:y+h, x:x+w])
        face_status[3] = not is_too_dark(frame[y:y+h, x:x+w])

      if face_status[0] and face_status[1] and face_status[2] and face_status[3]:
        face_capture = frame
        break
      else:
        cv2.putText(frame, f"Face large enough: {face_status[0]}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
        cv2.putText(frame, f"Face centered: {face_status[1]}", (10, 55), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
        cv2.putText(frame, f"Face not blurry: {face_status[2]}", (10, 80), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
        cv2.putText(frame, f"Light enough: {face_status[3]}", (10, 105), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)

      cv2.imshow("Webcam", frame)
      key = cv2.waitKey(1) & 0xFF
      if key == ord('q'):
        break
      if key == ord('c'):
        face_capture = frame
        break

  cap.release()
  cv2.destroyAllWindows()

  if face_capture is None:
    print("[ X ] Face capture failed.")
    exit()

  print("[ OK ] Face captured successfully!")
  result = DeepFace.verify(img1_path=reference_img_path, img2_path=face_capture, model_name="ArcFace", detector_backend="retinaface")
  if result["verified"]: print(f"[ OK ] User verified with distance {result['distance']}")
  else: print("[ X ] User not verified")

except Exception as e:
  print(f"[ X ] Error: {e}")