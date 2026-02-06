import React from "react";

function Header() {
  const onlineLogo = "https://cdn-icons-png.flaticon.com/512/2966/2966486.png"; 

  return (
    <div 
      className="text-white py-2 w-100 shadow-sm border-bottom border-white border-opacity-10"
      style={{ background: "#0f172a" }} 
    >
      <div className="px-3"> 
        <div className="d-flex align-items-center">
          
          <div 
            className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow me-3 overflow-hidden border border-2 border-info border-opacity-25" 
            style={{ 
              width: "50px", 
              height: "50px",
              boxShadow: "0 0 10px rgba(0, 212, 255, 0.2)" 
            }}
          >
            <img 
              src={onlineLogo} 
              alt="FitTrack Health Logo" 
              style={{ 
                width: "70%", 
                height: "70%", 
                objectFit: "contain" 
              }} 
            />
          </div>

          <div className="text-start">
            <h1 className="h4 fw-bolder mb-0 tracking-tight text-uppercase d-flex align-items-center" style={{ letterSpacing: '-0.5px' }}>
              Fit<span className="text-info">Track</span>
              <span className="badge bg-info bg-opacity-25 text-info ms-2" style={{ fontSize: '0.55rem' }}>PRO</span>
            </h1>
            <p className="small mb-0 opacity-75 fw-medium text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.65rem' }}>
              Advanced BMI & Wellness Analytics
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;