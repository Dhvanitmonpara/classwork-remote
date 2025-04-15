from deepface import DeepFace
import cv2
import numpy as np

frame = cv2.imread("data/photos/dhvanit2.jpeg")

result = DeepFace.represent(
    img_path=frame,
    model_name="ArcFace",
    detector_backend="retinaface",
    enforce_detection=True
)

embed1 = np.array(result[0]["embedding"])

# Run again to check consistency
result2 = DeepFace.represent(
    img_path=frame,
    model_name="ArcFace",
    detector_backend="retinaface",
    enforce_detection=True
)

embed2 = np.array(result2[0]["embedding"])

distance = np.linalg.norm(embed1 - embed2)
print("Distance between same image twice:", distance)
