
🏥 AI Health Map & Risk Prediction System

Many people ignore early health symptoms such as fever, cough, fatigue, and stress due to lack of awareness and proper tools for quick analysis. 

Healthcare systems are often reactive rather than preventive, leading to late diagnosis of diseases and increased health risks.

📌 Description
AI Health Map is an intelligent healthcare web application that analyzes user symptoms and predicts health risk levels using machine learning.
It also provides smart suggestions and visualizes risk data on an interactive map.

💡 Solution
The AI Health Map system provides an intelligent and user-friendly solution for early health risk detection.

- It takes user symptoms as input (fever, cough, fatigue, etc.)
-  Uses a Machine Learning model (Random Forest) to predict health risk
-  Displays risk level (Low / Medium / High) instantly
-  Generates smart health suggestions based on symptoms
-  Visualizes health data on an interactive map using Leaflet.js
-  Supports multiple languages (English, Marathi, Hindi)
-  Stores user history for tracking previous health conditions

🔄 Workflow

 1.  User Login
  - User logs into the system using email and password  

 2.  Language Selection  
 - User selects preferred language (English / Marathi / Hindi)  

 3.Symptom Input  
 - User enters symptoms (fever, cough, pain, etc.)  

 4. AI Processing  
 - System analyzes symptoms using predefined logic and ML model  
 - Calculates risk score  

  5. Result Generation  
  - Displays:
  - Health Risk Level (Low / Medium / High)
  - Mental Condition  
  - Disease Prediction  
  - Recovery Time  

  6. Suggestions  
  - Provides health tips and recommendations based on symptoms  

  7. Map Visualization  
  - Displays health risk data on interactive map using Leaflet.js  

  8.History Tracking  
  - Stores user inputs and results for future reference  

  9.Report Generation  
  - User can download health report (PDF)  

🔁 System Flow

User → Login → Select Language → Enter Symptoms → AI Analysis → Result → Suggestions → Map → History.

🛠️ Tech Stack
      Frontend
      1. HTML
      2.CSS
      3. JavaScript

🧠 Backend
     1.Python
     2.Flask

🚀 Features
    1.AI-based health risk prediction
    2.Symptom analysis system
    3.Interactive health risk map (Leaflet.js)
    4.User history tracking
    5.Smart health suggestions
    6.Multi-language support (English / Marathi / Hindi)
    7.Health report generation


🤖 Machine Learning
     1. Scikit-learn
     2.Random Forest Classifier

🗺️ Map Integration
      1.Leaflet.js
      2. OpenStreetMap

⚙️ How to Run the Project

1.	Clone the Repository

```bash
git clone https://github.com/sanket180920/AI-Health-Map.git
cd AI-Health-Map

 The API will run at:- http://127.0.0.1:5000

🧠 AI Model Information
1.Algorithm: Random Forest Classifier
2. Input: Symptoms (fever, cough, fatigue, etc.)
    Output: Health Risk Level (High / Low)

📸 Screenshots


(Add screenshots of your project here)

<img width="1894" height="941" alt="Screenshot 2026-03-30 115131" src="https://github.com/user-attachments/assets/8cefa8ff-a7b7-43f0-ad13-e4ff0395d3bf" />

<img width="1889" height="819" alt="Screenshot 2026-03-30 115520" src="https://github.com/user-attachments/assets/d23506ea-a48d-41ff-9367-346ce7c29d78" />

<img width="1877" height="869" alt="Screenshot 2026-03-30 115601" src="https://github.com/user-attachments/assets/c16b8bae-481e-40c2-aa22-c7342c8966b7" />


Future Scope

1. Integration with wearable devices
2. Advanced disease prediction using deep learning
3. Mobile app development
4. Doctor consultation integration
5. Cloud deployment (AWS / Firebase)
