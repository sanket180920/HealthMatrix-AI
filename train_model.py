import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import pickle

# Dummy dataset (you can improve later)
data = pd.DataFrame({
    "fever":[1,0,1,0,1],
    "cough":[1,1,0,0,1],
    "headache":[1,0,1,0,1],
    "body_pain":[1,0,1,0,1],
    "fatigue":[1,1,1,0,1],
    "chest_pain":[0,1,0,1,0],
    "nausea":[1,0,1,0,1],
    "risk":[1,0,1,0,1]
})

X = data.drop("risk", axis=1)
y = data["risk"]

model = RandomForestClassifier()
model.fit(X,y)

pickle.dump(model, open("model.pkl","wb"))

print("Model trained ✅")