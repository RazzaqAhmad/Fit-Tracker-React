import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
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
            <h6 className="fw-bold mb-3 text-uppercase small ls-wide">Health Tools</h6>
            <ul className="list-unstyled small text-secondary">
              <li className="mb-2">BMI Calculator</li>
              <li className="mb-2">Calorie Tracker</li>
              <li className="mb-2">Progress History</li>
            </ul>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <h6 className="fw-bold mb-3 text-uppercase small ls-wide">Connect With Us</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="mailto:support@fittrack.com" className="text-secondary fs-5">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary opacity-25" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small text-secondary mb-0">
              &copy; {currentYear} FitTrack Wellness. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="small">
              <span className="text-secondary me-3" style={{cursor: 'pointer'}}>Privacy Policy</span>
              <span className="text-secondary" style={{cursor: 'pointer'}}>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;