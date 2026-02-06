import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Added Upgrade to the menu items so it appears in the loop for Mobile
  const menuItems = [
    { path: "/", icon: "bi-house", label: "Home" },
    { path: "/diet", icon: "bi-apple", label: "Diet" },
    { path: "/calories", icon: "bi-fire", label: "Calories" },
    { path: "/exercise", icon: "bi-activity", label: "Workout" },
    { path: "/history", icon: "bi-clock-history", label: "History" },
    // Only adding this for mobile logic below
    { path: "/upgrade", icon: "bi-star", label: "Pro" },
  ];

  // Desktop sidebar should usually only show the main 5 links + the big button
  const desktopMenu = menuItems.filter(item => item.path !== "/upgrade");

  return (
    <>
      {/* --- DESKTOP SIDEBAR --- */}
      <div 
        className="d-none d-md-flex flex-column vh-100 shadow-lg" 
        style={{ 
          width: "280px", 
          background: "#0f172a", 
          borderRight: "1px solid rgba(255,255,255,0.1)",
          position: "fixed", 
          top: 0,
          left: 0,
          zIndex: 1050
        }}
      >
        <div className="p-4 flex-grow-1 mt-5">
          <div className="d-flex align-items-center mb-5 mt-2">
            <div className="bg-success rounded-3 p-2 shadow-sm">
              <i className="bi bi-heart-pulse-fill text-white fs-4"></i>
            </div>
            <span className="ms-3 fs-4 fw-bold text-white">
              FIT<span className="text-success">TRACK</span>
            </span>
          </div>
          
          <ul className="nav nav-pills flex-column gap-2">
            {desktopMenu.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`nav-link border-0 d-flex align-items-center py-3 px-3 rounded-3 transition-all ${
                    isActive(item.path) ? 'active-sidebar' : 'text-white-50'
                  }`}
                >
                  <i className={`bi ${isActive(item.path) ? item.icon + '-fill' : item.icon} fs-5 me-3 ${
                    isActive(item.path) ? 'text-white' : 'text-white-50'
                  }`}></i>
                  <span className="fw-semibold small text-uppercase">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* --- DESKTOP GO PRO BUTTON --- */}
          <div className="mt-4">
            <Link 
              to="/upgrade" 
              className="btn btn-success w-100 rounded-pill py-2 shadow-sm d-flex align-items-center justify-content-center border-0 transition-all"
              style={{ background: "linear-gradient(45deg, #198754, #20c997)" }}
            >
              <i className="bi bi-star-fill me-2 text-warning"></i>
              <span className="small fw-bold text-white">GO PRO</span>
            </Link>
          </div>
        </div>

        {/* User Profile Section */}
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

      {/* --- MOBILE BOTTOM NAV (Now includes Pro) --- */}
      <div 
        className="d-md-none fixed-bottom shadow-lg"
        style={{ 
          background: "#0f172a", 
          borderTop: "1px solid rgba(255,255,255,0.1)", 
          zIndex: 2000,
          paddingBottom: "env(safe-area-inset-bottom)"
        }}
      >
        <div className="d-flex justify-content-around align-items-center py-1">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="text-decoration-none d-flex flex-column align-items-center py-2 px-1"
              style={{ width: "16%" }} // Adjusted width to fit 6 items
            >
              <div className={`rounded-pill px-2 py-1 mb-1 transition-all ${
                isActive(item.path) ? 'bg-success bg-opacity-25' : ''
              }`}>
                <i className={`bi ${isActive(item.path) ? item.icon + '-fill' : item.icon} fs-5 ${
                  isActive(item.path) ? (item.path === '/upgrade' ? 'text-warning' : 'text-success') : 'text-white-50'
                }`}></i>
              </div>
              <span 
                className={`fw-bold ${isActive(item.path) ? 'text-success' : 'text-white-50'}`}
                style={{ fontSize: "0.6rem", letterSpacing: "0.1px" }}
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