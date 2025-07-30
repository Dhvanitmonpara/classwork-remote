import cv2
import mediapipe as mp
import os
import argparse

def process_img(img, face_detection):
    H, W, _ = img.shape
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    out = face_detection.process(img_rgb)

    if out.detections is not None:
        for detection in out.detections:
            bbox = detection.location_data.relative_bounding_box
            x1, y1, w, h = bbox.xmin, bbox.ymin, bbox.width, bbox.height

            x1, y1 = int(x1 * W), int(y1 * H)
            w, h = int(w * W), int(h * H)

            img[y1:y1 + h, x1:x1 + w, :] = cv2.blur(img[y1:y1 + h, x1:x1 + w, :], (30, 30))

    return img

# Argument parser
parser = argparse.ArgumentParser()
parser.add_argument("--mode", default="image")
parser.add_argument("--filePath", default="media/face.jpg")
args = parser.parse_args()

output_dir = './output'
os.makedirs(output_dir, exist_ok=True)

mp_face_detection = mp.solutions.face_detection

with mp_face_detection.FaceDetection(model_selection=0, min_detection_confidence=0.5) as face_detection:
    if args.mode == 'image':
        img = cv2.imread(args.filePath)

        if img is None:
            print("Error: Image not found at", args.filePath)
            exit()

        img = process_img(img, face_detection)

        output_path = os.path.join(output_dir, 'output.png')
        cv2.imwrite(output_path, img)
        print("Image saved at", output_path)
    
    elif args.mode == 'video':
        cap = cv2.VideoCapture(args.filePath)

        if not cap.isOpened():
            print("Error: Video not found at", args.filePath)
            exit()

        ret, frame = cap.read()

        if not ret:
            print("Error: Could not read first frame")
            exit()

        output_path = os.path.join(output_dir, 'output.mp4')
        output_video = cv2.VideoWriter(
            output_path, cv2.VideoWriter_fourcc(*'mp4v'), 25, (frame.shape[1], frame.shape[0])
        )

        while ret:
            frame = process_img(frame, face_detection)
            output_video.write(frame)

            # Live preview (optional)
            cv2.imshow("Processing", frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

            ret, frame = cap.read()

        cap.release()
        output_video.release()
        cv2.destroyAllWindows()
        print("Video saved at", output_path)
    elif args.mode == 'webcam':
        cap = cv2.VideoCapture(0)

        ret, frame = cap.read()
        while ret:

            frame = process_img(frame, face_detection)
            cv2.imshow("Processing", frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

            ret, frame = cap.read()

        cap.release()
    else:
        print("Error: Invalid mode. Use 'image' or 'video'")