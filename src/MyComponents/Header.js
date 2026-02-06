import React from "react";

function Header() {
  // Using a beautiful, high-quality medical/fitness logo from an online source
  const onlineLogo = "https://cdn-icons-png.flaticon.com/512/2966/2966486.png"; 

  return (
    <div className="bg-primary text-white py-4 shadow-sm border-bottom border-white border-opacity-10">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center justify-content-md-start">
          
          {/* Logo Container with Glow Effect */}
          <div 
            className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow me-3 overflow-hidden border border-2 border-info border-opacity-25" 
            style={{ 
              width: "65px", 
              height: "65px",
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" 
            }}
          >
            <img 
              src={onlineLogo} 
              alt="FitTrack Health Logo" 
              style={{ 
                width: "75%", 
                height: "75%", 
                objectFit: "contain" 
              }} 
            />
          </div>

          {/* Title and Tagline */}
          <div className="text-center text-md-start">
            <h1 className="h2 fw-bolder mb-0 tracking-tight text-uppercase" style={{ letterSpacing: '-0.5px' }}>
              Fit<span className="text-info">Track</span>
            </h1>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <span className="badge bg-info bg-opacity-25 text-info me-2" style={{ fontSize: '0.6rem' }}>PRO</span>
              <p className="small mb-0 opacity-75 fw-medium text-uppercase ls-wide" style={{ letterSpacing: '1.5px', fontSize: '0.75rem' }}>
                Advanced BMI & Wellness Analytics
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;