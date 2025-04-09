import cv2

# read webcam
webcam = cv2.VideoCapture(0)

print("Press 'q' to exit the webcam")

# visualize webcam
while True:
  ret, frame = webcam.read()

  # resize the frame
  cv2.resize(frame, (580, 380))

  cv2.imshow("frame", frame)

  if cv2.waitKey(40) & 0xFF == ord('q'):
    break

webcam.release()
cv2.destroyAllWindows()