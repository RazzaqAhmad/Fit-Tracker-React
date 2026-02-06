import React, { useState, useEffect } from 'react';

export default function Diet() {
  const plans = {
    Underweight: [
      "Mon: Oatmeal, eggs, nuts, milkshake",
      "Tue: Chicken, rice, vegetables, fruit smoothie",
      "Wed: Peanut butter toast, yogurt, nuts",
      "Thu: Fish, quinoa, salad",
      "Fri: Lentils, whole grain bread, fruits",
      "Sat: Protein shake, nuts, eggs",
      "Sun: Chicken, sweet potato, veggies"
    ],
    Healthy: [
      "Mon: Oatmeal, fruits, eggs",
      "Tue: Chicken salad with veggies",
      "Wed: Yogurt, nuts, smoothie",
      "Thu: Grilled fish, quinoa, vegetables",
      "Fri: Lentils, salad, whole grain bread",
      "Sat: Fruits, nuts, eggs",
      "Sun: Lean meat, sweet potato, veggies"
    ],
    Overweight: [
      "Mon: Oatmeal with fruits, boiled eggs",
      "Tue: Grilled chicken salad",
      "Wed: Vegetable soup, whole grains",
      "Thu: Grilled fish, veggies",
      "Fri: Lentil soup, salad",
      "Sat: Fruits, yogurt",
      "Sun: Light dinner, steamed vegetables"
    ],
    Obese: [
      "Mon: Steamed vegetables, lean protein",
      "Tue: Salad with grilled fish",
      "Wed: Vegetable soup, fruits",
      "Thu: Chicken & steamed veggies",
      "Fri: Salad, boiled eggs",
      "Sat: Fruits, green tea",
      "Sun: Light protein, vegetables"
    ]
  };

  const [category, setCategory] = useState("");

  useEffect(() => {
    const savedTempDiet = localStorage.getItem("temp_diet_category");
    if (savedTempDiet) {
      setCategory(savedTempDiet);
    }
  }, []);

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setCategory(selectedValue);
    
    if (selectedValue) {
      // 1. Save the Category Name
      localStorage.setItem("temp_diet_category", selectedValue);
      
      // 2. Save the ENTIRE PLAN array as a string so History can show it
      const fullPlanString = plans[selectedValue].join(" | ");
      localStorage.setItem("temp_diet_plan", fullPlanString);
    } else {
      localStorage.removeItem("temp_diet_category");
      localStorage.removeItem("temp_diet_plan");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4 border-success">
        <h2 className="text-success mb-3">
          <i className="bi bi-apple me-2"></i>Weekly Diet Planner
        </h2>
        <p>Select your BMI category to see a specialized nutrition plan.</p>

        <div className="mb-4">
          <label className="form-label fw-bold">Select BMI Category:</label>
          <select 
            className="form-select border-success" 
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

        <div className="mt-3 p-3 bg-light rounded border">
          {category ? (
            <div>
              <h4 className="text-primary mb-3">{category} Diet Plan:</h4>
              <ul className="list-group">
                {plans[category].map((day, index) => (
                  <li key={index} className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check2-circle text-success me-3"></i>
                    {day}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center py-4">
              <i className="bi bi-info-circle fs-2 text-muted"></i>
              <p className="text-muted mt-2 mb-0">
                Select a category above to see your customized weekly diet plan.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}