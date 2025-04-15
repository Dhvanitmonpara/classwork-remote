from deepface import DeepFace
from scipy.spatial.distance import cosine

img1_path = "data/photos/dhvanit4.jpeg"
img2_path = "data/photos/dhvanit2.jpeg"

result = DeepFace.verify(img1_path, img2_path)
print(result)

embedding1 = DeepFace.represent(img_path=img1_path, model_name="ArcFace")[0]["embedding"]
# print(embedding1)

embedding2 = DeepFace.represent(img_path=img2_path, model_name="ArcFace")[0]["embedding"]
# print(embedding2)

dist = cosine(embedding1, embedding2)
print("Cosine Distance:", dist)
