import React, { useState } from 'react';

export default function Home() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('--');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      
      if (bmiValue < 18.5) setStatus('Underweight');
      else if (bmiValue >= 18.5 && bmiValue <= 24.9) setStatus('Healthy');
      else if (bmiValue >= 25 && bmiValue <= 29.9) setStatus('Overweight');
      else setStatus('Obese');
    }
  };
const saveCompleteHealthSnapshot = () => {
  const savedGoals = JSON.parse(localStorage.getItem("fitnessGoals")) || { weight: "--", bmi: "--" };
  const savedCal = localStorage.getItem("temp_calories") || "--";
  const savedDiet = localStorage.getItem("temp_diet_plan") || "No diet selected";
  const savedEx = localStorage.getItem("temp_exercise_plan") || "No exercise selected";

  const newEntry = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    bmi: bmi,               
    category: status,         
    calories: savedCal,     
    diet: savedDiet,          
    exercise: savedEx,        
    targetWeight: savedGoals.weight
  };

  const existingHistory = JSON.parse(localStorage.getItem("bmiHistory")) || [];
  localStorage.setItem("bmiHistory", JSON.stringify([newEntry, ...existingHistory]));
  alert("Full Health Snapshot Saved!");
};
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>Home Page</h2>
          <p>Welcome to the BMI Calculator application!</p>
          <div className="card bg-light p-3 mb-3">
            <h3>What is BMI?</h3>
            <p>BMI (Body Mass Index) is a measure of body fat based on height and weight.</p>
          </div>
          <div className="card bg-light p-3">
            <h3>How to Use?</h3>
            <p>Enter your details below to see your health category.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow p-4 border-success">
            <h1 className="text-center mb-4">BMI Calculator</h1>
            
            <div className="mb-3">
              <label className="form-label">Height (cm)</label>
              <input 
                type="number" 
                className="form-control" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 170" 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Weight (kg)</label>
              <input 
                type="number" 
                className="form-control" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 70" 
              />
            </div>

            <button className="btn btn-success w-100 mb-4" onClick={calculateBMI}>
              Calculate BMI
            </button>

            <div className="text-center bg-light p-3 rounded border mb-3">
              <p className="mb-0">Your BMI:</p>
              <h2 className="text-success">{bmi || '--'}</h2>
              <p className="fw-bold">{status}</p>
            </div>

            <div className="alert alert-info">
              <strong>Diet Tip:</strong> {status === 'Healthy' ? 'Maintain your current diet.' : 'Consult a nutritionist.'}
            </div>

            <p className="text-muted small text-center">Healthy BMI Range: 18.5 - 24.9</p>
            <button className="btn btn-outline-primary w-100" onClick={saveCompleteHealthSnapshot} disabled={!bmi}>
              Save Complete Health Snapshot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}