import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 shadow-sm p-5 bg-white rounded-4">
          <h1 className="fw-bold text-primary mb-4 border-bottom pb-3">Privacy Policy</h1>
          <p className="text-muted small">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mt-4">
            <h5 className="fw-bold">1. Data Collection</h5>
            <p>FitTrack provides BMI and wellness analytics. We use <strong>Local Storage</strong> on your device to save your health history. This means your health data stays on your computer and is not uploaded to our servers unless explicitly stated.</p>
          </section>

          <section className="mt-4">
            <h5 className="fw-bold">2. Use of Information</h5>
            <p>Your data is used solely to provide visual charts and history logs within this application. We do not sell or share your personal health data with third parties.</p>
          </section>

          <section className="mt-4">
            <h5 className="fw-bold">3. Advertising</h5>
            <p>We use third-party advertising companies (like Google AdSense) to serve ads when you visit our website. These companies may use cookies to provide advertisements about goods and services of interest to you.</p>
          </section>

          <section className="mt-4">
            <h5 className="fw-bold">4. Contact Us</h5>
            <p>If you have questions about this policy, contact us at <span className="text-primary">support@fittrack.com</span>.</p>
          </section>

          <div className="mt-5 pt-3">
            <a href="/" className="btn btn-primary rounded-pill px-4">Back to Dashboard</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;