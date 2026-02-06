import React, { useState, useEffect } from 'react';

export default function Goals() {
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("fitnessGoals"));
    if (saved) {
      setWeight(saved.weight);
      setBmi(saved.bmi);
      setMessage(`Currently Tracking: Target Weight = ${saved.weight} kg, Target BMI = ${saved.bmi}`);
    }
  }, []);

  const saveGoals = () => {
    if (!weight || !bmi) {
      alert("Please enter valid target goals.");
      return;
    }

    const goals = { weight, bmi };
    localStorage.setItem("fitnessGoals", JSON.stringify(goals));
    setMessage(`Goals Saved! Target Weight: ${weight} kg, Target BMI: ${bmi}`);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4 border-warning">
        <h2 className="text-warning mb-3">
          <i className="bi bi-trophy me-2"></i>My Fitness Goals
        </h2>
        <p className="text-muted">Setting clear targets is the first step toward a healthier you.</p>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-bold">Target Weight (kg)</label>
            <input 
              type="number" 
              className="form-control border-warning" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 65" 
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">Target BMI</label>
            <input 
              type="number" 
              className="form-control border-warning" 
              value={bmi} 
              onChange={(e) => setBmi(e.target.value)}
              placeholder="e.g. 22" 
            />
          </div>
        </div>

        <button className="btn btn-warning w-100 mt-4 text-white fw-bold" onClick={saveGoals}>
          Save My Goals
        </button>

        {message && (
          <div className="mt-4 alert alert-warning border-warning bg-opacity-10 text-center">
            <i className="bi bi-check-circle-fill me-2"></i>
            {message}
          </div>
        )}

        <hr className="my-4" />

        <div className="row text-center">
          <div className="col-sm-4 mb-2">
            <div className="p-3 bg-light rounded border">
              <i className="bi bi-bullseye text-danger fs-3"></i>
              <h5 className="mt-2">Focus</h5>
              <p className="small mb-0 text-muted">Consistency is key</p>
            </div>
          </div>
          <div className="col-sm-4 mb-2">
            <div className="p-3 bg-light rounded border">
              <i className="bi bi-hourglass-split text-primary fs-3"></i>
              <h5 className="mt-2">Patience</h5>
              <p className="small mb-0 text-muted">Results take time</p>
            </div>
          </div>
          <div className="col-sm-4 mb-2">
            <div className="p-3 bg-light rounded border">
              <i className="bi bi-heart-pulse text-success fs-3"></i>
              <h5 className="mt-2">Health</h5>
              <p className="small mb-0 text-muted">Better every day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}