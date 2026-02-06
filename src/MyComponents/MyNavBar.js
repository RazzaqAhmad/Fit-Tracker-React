import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: "/", icon: "bi-house", label: "Home" },
    { path: "/diet", icon: "bi-apple", label: "Diet Plan" },
    { path: "/calories", icon: "bi-fire", label: "Calories" },
    { path: "/exercise", icon: "bi-activity", label: "Workout" },
    { path: "/goals", icon: "bi-trophy", label: "My Goals" },
    { path: "/history", icon: "bi-clock-history", label: "History" },
  ];

  return (
    <div 
      className="col-auto col-md-3 shadow-lg d-flex flex-column" 
      style={{ 
        background: "#0f172a", 
        borderRight: "1px solid rgba(255,255,255,0.1)",
        /* FIX: Lock height to viewport and fix position */
        height: "100vh", 
        position: "sticky",
        top: 0,
        left: 0,
        overflowY: "auto", // Allows the sidebar itself to scroll if you add too many menu items
        zIndex: 1050
      }}
    >
      <div className="p-4 flex-grow-1">
        {/* Brand Section */}
        <div className="d-flex align-items-center mb-5 mt-2 px-2">
          <div className="bg-success rounded-3 d-flex align-items-center justify-content-center shadow" 
               style={{ minWidth: "40px", height: "40px" }}>
            <i className="bi bi-heart-pulse-fill text-white fs-5"></i>
          </div>
          <span className="ms-3 fs-5 fw-bold text-white d-none d-sm-inline" style={{ letterSpacing: "1px" }}>
            FIT<span className="text-success text-opacity-75">TRACK</span>
          </span>
        </div>
        
        <ul className="nav nav-pills flex-column gap-2">
          {menuItems.map((item, index) => {
            const active = isActive(item.path);
            const isHovered = hoveredIndex === index;

            return (
              <li className="nav-item" key={item.path} 
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}>
                <Link 
                  to={item.path}
                  className={`nav-link border-0 d-flex align-items-center py-3 px-3 rounded-3 shadow-none ${active ? 'text-white' : 'text-white-50'}`}
                  style={{ 
                    transition: "all 0.3s ease",
                    background: active 
                      ? "linear-gradient(90deg, #198754, #20c997)" 
                      : isHovered ? "rgba(255,255,255,0.05)" : "transparent",
                    transform: isHovered && !active ? "translateX(8px)" : "none",
                  }}
                >
                  <i className={`bi ${item.icon} fs-5`} style={{ color: active ? "white" : (isHovered ? "#20c997" : "inherit") }}></i>
                  <span className="ms-3 d-none d-sm-inline fw-semibold small text-uppercase" style={{ letterSpacing: "0.5px" }}>
                    {item.label}
                  </span>
                  
                  {active && (
                    <div className="ms-auto d-none d-md-block bg-white rounded-circle shadow-sm" 
                         style={{ width: "6px", height: "6px" }}></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Profile Section */}
      <div className="mt-auto w-100 p-4 border-top border-white border-opacity-10 bg-dark bg-opacity-25">
        <div className="d-flex align-items-center p-2 rounded-4">
           <div className="rounded-circle bg-success bg-opacity-25 d-flex align-items-center justify-content-center border border-success border-opacity-25" 
                style={{ minWidth: "40px", height: "40px" }}>
              <i className="bi bi-person-circle text-success fs-5"></i>
           </div>
           <div className="overflow-hidden d-none d-sm-block ms-3">
              <p className="small text-white mb-0 fw-bold">Guest User</p>
              <p className="text-white-50 mb-0" style={{ fontSize: "0.65rem" }}>FREE ACCOUNT</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;