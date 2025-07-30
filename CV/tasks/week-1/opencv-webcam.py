import cv2

cap = cv2.VideoCapture(0)
mode = 'o'

ret = True
while ret:
    ret, frame = cap.read()

    key = cv2.waitKey(1) & 0xFF

    if key == ord('g'):
        mode = 'g'
    elif key == ord('o'):
        mode = 'o'
    elif key == ord('b'):
        mode = 'b'
    elif key == ord('q'):
        break

    if mode == 'o':
        cv2.imshow("Webcam", frame)
    elif mode == 'g':
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        cv2.imshow("Webcam", gray)
    elif mode == 'b':
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        blurred = cv2.blur(gray, (15, 15))
        cv2.imshow("Webcam", blurred)

cap.release()
cv2.destroyAllWindows()
