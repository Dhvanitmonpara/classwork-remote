import cv2

def resizeFrame(img, scale=0.75):
  height = int(img.shape[0] * scale)
  width = int(img.shape[1] * scale)

  return cv2.resize(img, (width, height), interpolation=cv2.INTER_AREA)

img = cv2.imread('data/photos/img1.jpg')
img = resizeFrame(img, 0.20)

# print("original: ", img)
cv2.imshow("og", img)
cv2.waitKey(0)

img = cv2.add(img, 40)
# print("After addition: ", img)
cv2.imshow("added", img)
cv2.waitKey(0)

inverted = 255 - img
# print("Inverted colors: ", inverted)
cv2.imshow("inverted", inverted)
cv2.waitKey(0)

text_img = cv2.putText(img, "Hello", (100, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 5)
cv2.imshow("text wala", text_img)
cv2.waitKey(0)

grey = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
cv2.imshow("Grayed", grey)
cv2.waitKey(0)

rotate = cv2.rotate(img, cv2.ROTATE_180)
cv2.imshow("Rotated", rotate)
cv2.waitKey(0)

flipped = cv2.flip(img, 1) # Horizontal
flipped = cv2.flip(img, 0) # Vertical

# Access and manipulate particular pixel
print(img[12, 8])

# slicing
roi = img.copy()
roi[100:300, 200:400] = [255, 0, 0]
cv2.imshow("image slicing", roi)
cv2.waitKey(0)

# Load Haar cascade
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# detect face
faces = face_cascade.detectMultiScale(grey, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
# print(faces[0][0])
# print(faces) # it returns an array of square shaped pixel coordinates for the face

# draw rectangle
for (x, y, w, h) in faces:
  cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)

# put text above detected face
cv2.putText(img, "Detected face", (faces[0][0], faces[0][1] - 10), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
cv2.putText(img, f"{len(faces)} face(s)", (20, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 255), 2)

cv2.imshow("faces", img)
cv2.waitKey(0)
