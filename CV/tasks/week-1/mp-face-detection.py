import cv2
import mediapipe as mp

cap = cv2.VideoCapture(0)

# load model
face_detection = mp.solutions.face_detection.FaceDetection(model_selection=0, min_detection_confidence=0.5)

ret = True
while ret:
  ret, frame = cap.read()

  rgb_image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
  detection_result = face_detection.process(rgb_image)

  if detection_result and detection_result.detections:
    for detection in detection_result.detections:
      # draw bounding box
      mp.solutions.drawing_utils.draw_detection(frame, detection)

  cv2.imshow("webcam", frame)
  if cv2.waitKey(24) & 0xFF == ord('q'):
    break

cap.release()
cv2.destroyAllWindows()