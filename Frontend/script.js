
//  FIRST FUNCTION (TOP)

function getRiskScore(text){

  let score = 0;

  if(text.includes("fever")) score += 30;
  if(text.includes("cough")) score += 20;
  if(text.includes("pain")) score += 40;
  if(text.includes("chest")) score += 50;
  if(text.includes("fatigue")) score += 20;
  if(text.includes("stress")) score += 15;

  return score;
}


function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email && password){
    window.location.href = "language.html";
  } else {
    alert("Enter details");
  }
}


function setLang(lang){
  localStorage.setItem("lang", lang);
  window.location.href = "prediction.html";
}


function applyLanguage(){

  let lang = localStorage.getItem("lang");

  if(lang === "mr"){
    document.getElementById("text").placeholder = "तुमची लक्षणे लिहा...";
  }

  if(lang === "hi"){
    document.getElementById("text").placeholder = "अपने लक्षण लिखें...";
  }
}

let map;

function loadMap(){

  if(map){
    map.remove();
  }

  //  India center

  map = L.map('map').setView([20.5937, 78.9629], 5);

  // 🌍 Tile layer (zoom + drag + real map)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 18
  }).addTo(map);

  // Data (interactive markers)

  let cities = [
    {name:"Mumbai", lat:19.0760, lon:72.8777, cases: 12000},
    {name:"Pune", lat:18.5204, lon:73.8567, cases: 8000},
    {name:"Nagpur", lat:21.1458, lon:79.0882, cases: 4000}
  ];

  //  Add circles instead of simple markers

  cities.forEach(city => {

    let color =
      city.cases > 10000 ? "red" :
      city.cases > 5000 ? "orange" : "green";

    let circle = L.circleMarker([city.lat, city.lon], {
      radius: 12,
      color: color,
      fillColor: color,
      fillOpacity: 0.6
    }).addTo(map);

    // Popup info

    circle.bindPopup(`
      <b>${city.name}</b><br>
      Cases: ${city.cases}<br>
      Risk: ${color.toUpperCase()}
    `);

    // Hover effect
    circle.on('mouseover', function () {
      this.openPopup();
    });
  });

  // Fix rendering issue
  
  setTimeout(() => {
    map.invalidateSize();
  }, 200);
}


// API DATA
async function getDiseaseData(){

  let res = await fetch("https://disease.sh/v3/covid-19/countries/India");
  let json = await res.json();

  let data = [
    {city:"Nagpur", lat:21.1458, lon:79.0882, cases: json.cases/5},
    {city:"Mumbai", lat:19.0760, lon:72.8777, cases: json.cases/2},
    {city:"Pune", lat:18.5204, lon:73.8567, cases: json.cases/3}
  ];

  loadMap(data);
}

// ANALYZE
function analyze(){

  let text = document.getElementById("text").value.toLowerCase();
  let history = document.getElementById("history");
  let lang = localStorage.getItem("lang");

  let risk = "Low ";
  let mental = "Normal ";

  if(text.includes("fever") || text.includes("cough")){
    risk = "Medium ";
  }

  if(text.includes("pain") || text.includes("chest")){
    risk = "High ";
  }

  if(text.includes("stress")){
    mental = "High Stress ";
  }

  if(text.includes("happy")){
    mental = "Good ";
  }

  //  Language Conversion

  if(lang === "mr"){
    risk = risk.replace("Low","कमी").replace("Medium","मध्यम").replace("High","उच्च");
    mental = mental.replace("Normal","सामान्य");
  }

  if(lang === "hi"){
    risk = risk.replace("Low","कम").replace("Medium","मध्यम").replace("High","उच्च");
    mental = mental.replace("Normal","सामान्य");
  }

  //  Show result

  document.getElementById("risk").innerText = risk;
  document.getElementById("mental").innerText = mental;

  //ADVANCED SUGGESTIONS

  let suggestions = [];

  // Fever / Cold

  if(text.includes("fever") || text.includes("cough")){
    suggestions.push("Take proper rest ");
    suggestions.push("Drink warm fluids ");
    suggestions.push("Take steam inhalation ");
    suggestions.push("Avoid cold food ");
  }

  // Chest / Pain

  if(text.includes("pain") || text.includes("chest")){
    suggestions.push("Consult a doctor immediately ");
    suggestions.push("Avoid heavy physical activity ");
    suggestions.push("Monitor heart rate ");
  }

  // Fatigue

  if(text.includes("fatigue")){
    suggestions.push("Take enough sleep ");
    suggestions.push("Eat nutritious food ");
    suggestions.push("Stay hydrated ");
  }

  // Stress

  if(text.includes("stress")){
    suggestions.push("Try meditation ");
    suggestions.push("Do deep breathing exercises ");
    suggestions.push("Take breaks from screen ");
    suggestions.push("Talk to someone you trust ");
  }

  //  Happy

  if(text.includes("happy")){
    suggestions.push("Maintain your healthy lifestyle ");
    suggestions.push("Stay active and positive ");
  }

  //  Default

  if(suggestions.length === 0){
    suggestions.push("Stay healthy ");
    suggestions.push("Exercise regularly ");
    suggestions.push("Drink enough water ");
    suggestions.push("Maintain balanced diet ");
  }

  //  Show suggestions

  let list = document.getElementById("suggestionsList");
  list.innerHTML = "";

  suggestions.forEach(item => {
    let li = document.createElement("li");
  li.innerText = "- " + item;
    list.appendChild(li);
  });

  // ADVANCED REPORT

  let score = getRiskScore(text);
  let disease = "No major issue";
  let status = "Healthy ";
  let recovery = "No rest needed";

  if(text.includes("fever") && text.includes("cough")){
    disease = "Possible Viral Infection ";
  }

  if(text.includes("chest") && text.includes("pain")){
    disease = "Heart Risk ";
  }

  if(text.includes("fatigue")){
    disease = "Weakness / Low Energy";
  }

  let severity = score + "/100";

  if(score > 70){
    status = "Critical ";
    recovery = "Immediate medical attention needed";
  }
  else if(score > 40){
    status = "Moderate ";
    recovery = "3-5 days rest required";
  }
  else{
    status = "Stable ";
    recovery = "1-2 days rest";
  }

  document.getElementById("disease").innerText = disease;
  document.getElementById("score").innerText = severity;
  document.getElementById("status").innerText = status;
  document.getElementById("recovery").innerText = recovery;

  //  History

  let li = document.createElement("li");
  li.innerText = text + " → " + risk;
  history.appendChild(li);

  /////

  getDiseaseData();
  loadMap();
}