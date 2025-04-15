import cv2

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

cap = cv2.VideoCapture(0)
count = 0

while True:
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    faces = face_cascade.detectMultiScale(gray, 1.3, 5)

    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x,y), (x+w, y+h), (255, 0, 0), 2)

    cv2.imshow("Face Detector", frame)

    key = cv2.waitKey(1) & 0xFF
    if key == ord('s'):
        for (x, y, w, h) in faces:
            face = frame[y:y+h, x:x+w]
            filename = f"face_{count}.jpg"
            cv2.imwrite(filename, face)
            print(f"[+] Saved {filename}")
            count += 1
    elif key == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
