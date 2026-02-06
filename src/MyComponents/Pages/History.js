import React, { useState, useEffect } from 'react';

export default function History() {
  const [history, setHistory] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    const savedHistory = JSON.parse(localStorage.getItem("bmiHistory")) || [];
    setHistory(savedHistory);
  };

  const deleteEntry = (index) => {
    if (window.confirm("Are you sure you want to delete this health record?")) {
      const updatedHistory = [...history];
      updatedHistory.splice(index, 1);
      localStorage.setItem("bmiHistory", JSON.stringify(updatedHistory));
      setHistory(updatedHistory);
    }
  };

  const startEdit = (index, item) => {
    setEditIndex(index);
    setEditData(item);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveUpdate = () => {
    const updatedHistory = [...history];
    updatedHistory[editIndex] = editData;
    localStorage.setItem("bmiHistory", JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
    setEditIndex(null);
  };

  const clearHistory = () => {
    if (window.confirm("DANGER: This will permanently delete ALL records. Proceed?")) {
      localStorage.removeItem("bmiHistory");
      setHistory([]);
    }
  };

  const getBadgeStyle = (cat) => {
    switch (cat) {
      case 'Healthy': return { bg: 'rgba(40, 167, 69, 0.1)', text: '#28a745', border: '#28a745' };
      case 'Underweight': return { bg: 'rgba(23, 162, 184, 0.1)', text: '#17a2b8', border: '#17a2b8' };
      case 'Overweight': return { bg: 'rgba(255, 193, 7, 0.1)', text: '#856404', border: '#ffc107' };
      case 'Obese': return { bg: 'rgba(220, 53, 69, 0.1)', text: '#dc3545', border: '#dc3545' };
      default: return { bg: '#f8f9fa', text: '#6c757d', border: '#dee2e6' };
    }
  };

  return (
    <div className="container py-5">
      {/* HEADER SECTION */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 pb-3 border-bottom">
        <div className="mb-3 mb-md-0">
          <h2 className="fw-black text-primary display-6 mb-1">Health Journey</h2>
          <p className="text-muted"><i className="bi bi-graph-up-arrow me-2"></i>Visualizing your wellness progress over time</p>
        </div>
        {history.length > 0 && (
          <button className="btn btn-outline-danger btn-sm rounded-pill px-4 shadow-sm hover-lift" onClick={clearHistory}>
            <i className="bi bi-trash3-fill me-2"></i>Purge All Data
          </button>
        )}
      </div>

      {history.length > 0 ? (
        <div className="row justify-content-center">
          {history.map((item, index) => {
            const style = getBadgeStyle(item.category);
            return (
              <div key={index} className="col-lg-10 mb-5">
                <div className="card border-0 shadow-lg position-relative overflow-visible" 
                     style={{ borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                  
                  {/* FLOATING DATE TAG */}
                  <div className="position-absolute top-0 start-0 translate-middle-y ms-4">
                    <span className="badge shadow-sm px-3 py-2" style={{ backgroundColor: '#212529', borderRadius: '10px' }}>
                      <i className="bi bi-calendar3 me-2"></i>{item.date}
                    </span>
                  </div>

                  <div className="card-body p-4 pt-5">
                    {editIndex === index ? (
                      /* --- REFINED EDIT FORM --- */
                      <div className="row g-3 p-2">
                        <div className="col-md-3">
                          <label className="small fw-bold text-muted">BMI SCORE</label>
                          <input type="text" name="bmi" className="form-control form-control-lg border-primary" value={editData.bmi} onChange={handleEditChange} />
                        </div>
                        <div className="col-md-3">
                          <label className="small fw-bold text-muted">TARGET (KG)</label>
                          <input type="text" name="targetWeight" className="form-control form-control-lg border-primary" value={editData.targetWeight} onChange={handleEditChange} />
                        </div>
                        <div className="col-md-6">
                          <label className="small fw-bold text-muted">CATEGORY</label>
                          <select name="category" className="form-select form-select-lg border-primary" value={editData.category} onChange={handleEditChange}>
                            <option value="Underweight">Underweight</option>
                            <option value="Healthy">Healthy</option>
                            <option value="Overweight">Overweight</option>
                            <option value="Obese">Obese</option>
                          </select>
                        </div>
                        <div className="col-12 mt-4 text-end">
                           <button className="btn btn-success rounded-pill px-5 fw-bold me-2" onClick={saveUpdate}>SAVE CHANGES</button>
                           <button className="btn btn-light rounded-pill px-4" onClick={() => setEditIndex(null)}>CANCEL</button>
                        </div>
                      </div>
                    ) : (
                      /* --- MODERN DATA DISPLAY --- */
                      <div className="row align-items-center g-4">
                        {/* BMI CIRCLE */}
                        <div className="col-md-3 text-center">
                          <div className="d-inline-flex align-items-center justify-content-center rounded-circle border border-5 shadow-sm mb-2" 
                               style={{ width: '100px', height: '100px', borderColor: style.border + ' !important' }}>
                            <h3 className="fw-bold mb-0" style={{ color: style.text }}>{item.bmi}</h3>
                          </div>
                          <div className="mt-2">
                            <span className="fw-bold text-uppercase small px-3 py-1 rounded-pill" 
                                  style={{ backgroundColor: style.bg, color: style.text, border: `1px solid ${style.border}` }}>
                              {item.category}
                            </span>
                          </div>
                        </div>

                        {/* STATS DETAILS */}
                        <div className="col-md-4 border-start border-end px-md-4">
                          <div className="d-flex align-items-center mb-3">
                            <div className="p-2 bg-warning bg-opacity-10 rounded-3 me-3"><i className="bi bi-bullseye text-warning"></i></div>
                            <div>
                               <p className="text-muted small mb-0 uppercase fw-bold">Target Weight</p>
                               <span className="h6 fw-bold">{item.targetWeight || "--"} <small>kg</small></span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="p-2 bg-danger bg-opacity-10 rounded-3 me-3"><i className="bi bi-fire text-danger"></i></div>
                            <div>
                               <p className="text-muted small mb-0 uppercase fw-bold">Fuel Goal</p>
                               <span className="h6 fw-bold text-danger">{item.calories || "--"} <small>kcal</small></span>
                            </div>
                          </div>
                        </div>

                        {/* ACTION & PLANS */}
                        <div className="col-md-5">
                          <div className="p-3 bg-light rounded-4 border-start border-4 border-primary">
                            <h6 className="fw-bold text-success small mb-1">NUTRITION STRATEGY</h6>
                            <p className="small text-dark mb-3 line-clamp-2">{item.diet || "No specific diet logged."}</p>
                            <div className="d-flex justify-content-between align-items-center">
                               <button className="btn btn-link btn-sm p-0 text-primary text-decoration-none fw-bold" onClick={() => startEdit(index, item)}>
                                 <i className="bi bi-pencil-square me-1"></i>MODIFY
                               </button>
                               <button className="btn btn-link btn-sm p-0 text-danger text-decoration-none fw-bold" onClick={() => deleteEntry(index)}>
                                 <i className="bi bi-trash-fill me-1"></i>REMOVE
                               </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* BEAUTIFUL EMPTY STATE */
        <div className="text-center py-5 shadow-sm bg-white rounded-5 border-dashed border-2">
           <div className="display-1 text-light mb-4"><i className="bi bi-clipboard-pulse"></i></div>
           <h4 className="fw-bold text-secondary">Your journey hasn't started yet</h4>
           <p className="text-muted mb-4">Calculate your BMI on the Home screen to see your progress here.</p>
           <a href="/" className="btn btn-primary rounded-pill px-5 shadow">Start Now</a>
        </div>
      )}
    </div>
  );
}