import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto border-top border-white border-opacity-10">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold text-info mb-3">
              Fit<span className="text-white">Track</span>
            </h5>
            <p className="small text-secondary" style={{ lineHeight: '1.6' }}>
              Empowering your health journey with precision tracking and 
              personalized wellness insights. Stay fit, stay informed.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <h6 className="fw-bold mb-3 text-uppercase small ls-wide text-white-50">Health Tools</h6>
            <ul className="list-unstyled small text-secondary">
              <li className="mb-2"><Link to="/" className="text-decoration-none text-secondary">BMI Calculator</Link></li>
              <li className="mb-2"><Link to="/calories" className="text-decoration-none text-secondary">Calorie Tracker</Link></li>
              <li className="mb-2"><Link to="/history" className="text-decoration-none text-secondary">Progress History</Link></li>
            </ul>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <h6 className="fw-bold mb-3 text-uppercase small ls-wide text-white-50">Connect With Us</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
              <a href="#!" className="text-secondary fs-5 hover-info transition-all"><i className="bi bi-facebook"></i></a>
              <a href="#!" className="text-secondary fs-5 hover-info transition-all"><i className="bi bi-instagram"></i></a>
              <a href="#!" className="text-secondary fs-5 hover-info transition-all"><i className="bi bi-twitter-x"></i></a>
              <a href="mailto:support@fittrack.com" className="text-secondary fs-5 hover-info transition-all"><i className="bi bi-envelope-fill"></i></a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary opacity-25" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small text-secondary mb-0">
              &copy; {currentYear} FitTrack Wellness. Built for better health.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="small">
              <Link to="/privacy" className="text-secondary me-3 text-decoration-none hover-white">Privacy Policy</Link>
              <Link to="/privacy" className="text-secondary text-decoration-none hover-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;