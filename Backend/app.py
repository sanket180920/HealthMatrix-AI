from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

model = pickle.load(open("model.pkl","rb"))

@app.route("/")
def home():
    return "API running ✅"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    features = [
        data["fever"],
        data["cough"],
        data["headache"],
        data["body_pain"],
        data["fatigue"],
        data["chest_pain"],
        data["nausea"]
    ]

    prediction = model.predict([features])[0]

    result = "High Risk ⚠️" if prediction == 1 else "Low Risk ✅"

    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(debug=True)