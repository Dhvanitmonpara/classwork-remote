import numpy as np
import cv2

def resizeFrame(img, scale=0.75):
  height = int(img.shape[0] * scale)
  width = int(img.shape[1] * scale)

  return cv2.resize(img, (width, height), interpolation=cv2.INTER_AREA)

img = cv2.imread("data/photos/img1.jpg")
img = resizeFrame(img, 0.2)

blur_mask = np.ones((5, 5), np.float32) / 25
blurred = cv2.filter2D(img, -1, kernel=blur_mask)
print(blur_mask)

sharp_mask = np.array([
  [0, -1, 0],
  [-1, 5, -1],
  [0, -1, 0]
])
print(sharp_mask)
sharpened = cv2.filter2D(img, -1, kernel=sharp_mask) 

cv2.imshow("blur", blurred)
cv2.waitKey(0)

cv2.imshow("sharp", sharpened)
cv2.waitKey(0)