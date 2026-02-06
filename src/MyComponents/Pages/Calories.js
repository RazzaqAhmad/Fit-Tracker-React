import React, { useState } from 'react';

export default function Calories() {
  const [formData, setFormData] = useState({
    age: '',
    sex: 'male',
    height: '',
    weight: '',
    activity: '1.2'
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const calculateCalories = () => {
    const { age, sex, height, weight, activity } = formData;

    if (!age || !height || !weight) {
      alert("Please fill all fields correctly.");
      return;
    }

    // Mifflin-St Jeor Equation
    // $$BMR_{male} = 10 \times weight + 6.25 \times height - 5 \times age + 5$$
    // $$BMR_{female} = 10 \times weight + 6.25 \times height - 5 \times age - 161$$
    let bmr;
    if (sex === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = Math.round(bmr * parseFloat(activity));
    setResult(tdee);

    // --- SAVE TO MIDDLEMAN (LocalStorage) ---
    // This allows Home.js to see this number when saving history
    localStorage.setItem("temp_calories", tdee);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4 border-primary">
        <h2 className="text-primary mb-4">
          <i className="bi bi-fire me-2"></i>Calorie Calculator
        </h2>
        
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label fw-bold">Age</label>
              <input 
                type="number" 
                id="age" 
                className="form-control" 
                placeholder="Years" 
                onChange={handleChange} 
                value={formData.age}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Sex</label>
              <select id="sex" className="form-select" onChange={handleChange} value={formData.sex}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Height (cm)</label>
              <input 
                type="number" 
                id="height" 
                className="form-control" 
                placeholder="cm" 
                onChange={handleChange} 
                value={formData.height}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label fw-bold">Weight (kg)</label>
              <input 
                type="number" 
                id="weight" 
                className="form-control" 
                placeholder="kg" 
                onChange={handleChange} 
                value={formData.weight}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Activity Level</label>
              <select id="activity" className="form-select" onChange={handleChange} value={formData.activity}>
                <option value="1.2">Sedentary (little or no exercise)</option>
                <option value="1.375">Lightly active (1-3 days/week)</option>
                <option value="1.55">Moderately active (3-5 days/week)</option>
                <option value="1.725">Very active (6-7 days/week)</option>
                <option value="1.9">Extra active (physical job/2x training)</option>
              </select>
            </div>
            <button className="btn btn-primary w-100 mt-4 fw-bold" onClick={calculateCalories}>
              Calculate Daily Calories
            </button>
          </div>
        </div>

        {result && (
          <div className="mt-4 p-4 bg-light rounded border text-center shadow-sm">
            <h3 className="mb-3">Maintenance: <span className="text-success">{result} kcal/day</span></h3>
            
            <div className="row g-2 mt-3">
              <div className="col-md-6">
                <div className="p-3 border rounded bg-white">
                  <p className="mb-1 text-muted small uppercase">Weight Loss (-0.25kg/week)</p>
                  <h5 className="mb-0 text-info">{result - 250} kcal</h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded bg-white">
                  <p className="mb-1 text-muted small uppercase">Weight Gain (+0.5kg/week)</p>
                  <h5 className="mb-0 text-warning">{result + 500} kcal</h5>
                </div>
              </div>
            </div>
            <p className="mt-3 text-muted small">
              <i className="bi bi-info-circle me-1"></i>
              Calculated using the Mifflin-St Jeor formula.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}