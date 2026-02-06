import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: "/", icon: "bi-house", label: "Home" },
    { path: "/diet", icon: "bi-apple", label: "Diet" },
    { path: "/calories", icon: "bi-fire", label: "Calories" },
    { path: "/exercise", icon: "bi-activity", label: "Workout" },
    { path: "/history", icon: "bi-clock-history", label: "History" },
  ];

  return (
    <>
      {/* --- MOBILE TOP HEADER (New!) --- */}
      <div className="d-md-none sticky-top w-100 px-3 py-2 d-flex align-items-center justify-content-between shadow-sm" 
           style={{ background: "#0f172a", borderBottom: "1px solid rgba(255,255,255,0.1)", zIndex: 1060 }}>
        <div className="d-flex align-items-center">
          <div className="bg-success rounded-2 p-1 me-2">
            <i className="bi bi-heart-pulse-fill text-white fs-6"></i>
          </div>
          <span className="fw-bold text-white small mb-0">FITTRACK</span>
        </div>
        <div className="rounded-circle bg-white bg-opacity-10 p-1">
          <i className="bi bi-person-circle text-success fs-5"></i>
        </div>
      </div>

      {/* --- DESKTOP SIDEBAR --- */}
      <div 
        className="d-none d-md-flex flex-column vh-100 shadow-lg" 
        style={{ 
          minWidth: "260px",
          maxWidth: "260px",
          background: "#0f172a", 
          borderRight: "1px solid rgba(255,255,255,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1050
        }}
      >
        <div className="p-4 flex-grow-1">
          <div className="d-flex align-items-center mb-5 mt-2">
            <div className="bg-success rounded-3 p-2 shadow-sm">
              <i className="bi bi-heart-pulse-fill text-white fs-4"></i>
            </div>
            <span className="ms-3 fs-4 fw-bold text-white">
              FIT<span className="text-success">TRACK</span>
            </span>
          </div>
          
          <ul className="nav nav-pills flex-column gap-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`nav-link border-0 d-flex align-items-center py-3 px-3 rounded-3 transition-all ${
                    isActive(item.path) ? 'text-white shadow' : 'text-white-50'
                  }`}
                  style={{ 
                    background: isActive(item.path) ? "linear-gradient(90deg, #198754, #20c997)" : "transparent",
                  }}
                >
                  <i className={`bi ${item.icon} fs-5 me-3`}></i>
                  <span className="fw-semibold small text-uppercase">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border-top border-white border-opacity-10 bg-black bg-opacity-20">
          <div className="d-flex align-items-center p-2 rounded-3">
            <i className="bi bi-person-circle text-success fs-3 me-3"></i>
            <div className="overflow-hidden">
              <p className="small text-white mb-0 fw-bold text-truncate">Active User</p>
              <p className="text-white-50 mb-0" style={{ fontSize: "0.65rem" }}>FREE ACCOUNT</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE BOTTOM NAV (Glassmorphism Style) --- */}
      <div 
        className="d-md-none fixed-bottom shadow-lg"
        style={{ 
          background: "rgba(15, 23, 42, 0.95)", 
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255,255,255,0.1)", 
          zIndex: 2000,
          paddingBottom: "env(safe-area-inset-bottom)" // Fixes iPhone notch overlap
        }}
      >
        <div className="d-flex justify-content-around align-items-center py-1">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="text-decoration-none d-flex flex-column align-items-center py-2 px-1"
              style={{ width: "20%", transition: "0.2s" }}
            >
              <div className={`rounded-pill px-3 py-1 mb-1 transition-all ${isActive(item.path) ? 'bg-success bg-opacity-20' : ''}`}>
                <i className={`bi ${item.icon} fs-5 ${isActive(item.path) ? 'text-success' : 'text-white-50'}`}></i>
              </div>
              <span 
                className={`fw-bold ${isActive(item.path) ? 'text-success' : 'text-white-50'}`}
                style={{ fontSize: "0.6rem", letterSpacing: "0.3px" }}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;