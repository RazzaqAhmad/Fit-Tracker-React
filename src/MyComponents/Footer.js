import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    /* Reduced pt-5 to pt-4 on desktop and pt-3 on mobile. 
       Added extra bottom padding to clear the mobile nav bar. */
    <footer className="bg-dark text-light pt-3 pt-md-4 pb-5 pb-md-3 mt-auto border-top border-white border-opacity-10">
      <div className="container">
        <div className="row gy-3"> {/* Smaller vertical gap for mobile */}
          
          {/* Logo and Tagline - Scaled down for mobile */}
          <div className="col-md-4 text-center text-md-start">
            <h6 className="fw-bold text-info mb-2">
              Fit<span className="text-white">Track</span>
            </h6>
            <p className="small text-secondary mb-0 d-md-block d-none" style={{ fontSize: '0.75rem' }}>
              Empowering your health journey with precision tracking.
            </p>
          </div>

          {/* Social Icons - Compact row */}
          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center gap-3">
              <a href="#!" className="text-secondary fs-6"><i className="bi bi-facebook"></i></a>
              <a href="#!" className="text-secondary fs-6"><i className="bi bi-instagram"></i></a>
              <a href="#!" className="text-secondary fs-6"><i className="bi bi-twitter-x"></i></a>
              <a href="mailto:support@fittrack.com" className="text-secondary fs-6"><i className="bi bi-envelope-fill"></i></a>
            </div>
          </div>

          {/* Legal Links - Combined into one line for mobile */}
          <div className="col-md-4 text-center text-md-end mt-2 mt-md-0">
            <div style={{ fontSize: '0.7rem' }}>
              <Link to="/privacy" className="text-secondary text-decoration-none me-2">Privacy</Link>
              <span className="text-secondary opacity-25">|</span>
              <Link to="/privacy" className="text-secondary text-decoration-none ms-2">Terms</Link>
            </div>
          </div>
        </div>

        {/* Removed <hr /> as it creates too much white space on small screens */}

        <div className="text-center mt-3">
          <p className="text-secondary mb-0" style={{ fontSize: '0.65rem', opacity: 0.6 }}>
            &copy; {currentYear} FitTrack Wellness.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;