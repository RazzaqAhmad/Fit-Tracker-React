import React, { useState, useEffect } from 'react';

export default function Exercise() {
  const [category, setCategory] = useState("");

  const exercises = {
    Underweight: [
      "Light strength training 3x/week",
      "Yoga & stretching daily",
      "Walking 20-30 min/day"
    ],
    Healthy: [
      "Cardio 3-5x/week",
      "Strength training 2-3x/week",
      "Stretching & flexibility exercises"
    ],
    Overweight: [
      "Cardio 4-5x/week",
      "Moderate strength training 2x/week",
      "Daily walking 30-60 min"
    ],
    Obese: [
      "Low-impact cardio 5x/week",
      "Light strength & resistance exercises",
      "Daily walking or swimming 30-60 min"
    ]
  };

  // Load selection if user returns to page
  useEffect(() => {
    const savedTempEx = localStorage.getItem("temp_exercise_category");
    if (savedTempEx) {
      setCategory(savedTempEx);
    }
  }, []);

  // Handle Change and Save to LocalStorage
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setCategory(selectedValue);

    if (selectedValue) {
      // 1. Save the Category Name
      localStorage.setItem("temp_exercise_category", selectedValue);
      
      // 2. Save the ENTIRE EXERCISE LIST as a string for History
      const fullExerciseString = exercises[selectedValue].join(" | ");
      localStorage.setItem("temp_exercise_plan", fullExerciseString);
    } else {
      localStorage.removeItem("temp_exercise_category");
      localStorage.removeItem("temp_exercise_plan");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4 border-info">
        <h2 className="text-info mb-3">
          <i className="bi bi-activity me-2"></i>Exercise Recommendations
        </h2>
        <p className="text-muted">Personalized workout routines based on your BMI category.</p>

        {/* Category Selection */}
        <div className="mb-4">
          <label className="form-label fw-bold">Select Your Category:</label>
          <select 
            className="form-select border-info" 
            value={category} 
            onChange={handleCategoryChange}
          >
            <option value="">-- Choose Category --</option>
            <option value="Underweight">Underweight</option>
            <option value="Healthy">Healthy</option>
            <option value="Overweight">Overweight</option>
            <option value="Obese">Obese</option>
          </select>
        </div>

        {/* Exercise List Display */}
        <div className="mt-2">
          {category ? (
            <div className="p-3 rounded bg-info bg-opacity-10 border border-info">
              <h4 className="text-info mb-3">{category} Plan:</h4>
              <ul className="list-group">
                {exercises[category].map((ex, index) => (
                  <li key={index} className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-info me-3"></i>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center p-5 border rounded bg-light">
              <i className="bi bi-info-circle fs-1 text-muted"></i>
              <p className="mt-2 text-muted">Please select a category to see your recommended exercises.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}