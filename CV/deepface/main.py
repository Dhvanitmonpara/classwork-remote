from deepface import DeepFace
import json

# result = DeepFace.verify(img1_path="data/dhvanit4.jpeg", img2_path="data/dhvanit1.jpeg")
# print(json.dumps(result, indent=2))

# dfs = DeepFace.find(img_path="data/dhvanit4.jpeg", db_path="./db")
# print(dfs)

face = DeepFace.extract_faces(img_path="data/dhvanit4.jpeg", output_directory="data/extracted_faces")
print(face)