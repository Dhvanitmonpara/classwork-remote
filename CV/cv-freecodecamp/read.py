import cv2

img = cv2.imread('data/photos/img1.jpg')
# print(img)

# resized = cv2.resize(img, (500, 650))
# cv2.imshow("img",resized)

# cv2.imshow("img",img)
# cv2.waitKey(0)

capture = cv2.VideoCapture('data/videos/vd1.mp4')
print(capture)

isTrue = True
while True:
  isTrue, frame = capture.read()

  if isTrue:
    cv2.imshow("video", frame)
    if cv2.waitKey(24) & 0xFF==ord('q'):
      break

capture.release()
cv2.destroyAllWindows()