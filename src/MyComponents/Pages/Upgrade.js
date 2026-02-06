import React from 'react';

const Upgrade = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      features: ["BMI Calculator", "Daily Calorie Intake", "Basic Diet Tips", "Limited History (3 entries)"],
      buttonText: "Current Plan",
      isPro: false
    },
    {
      name: "Pro",
      price: "$6.00",
      period: "/year",
      features: ["Everything in Free", "Unlimited History Tracking", "Advanced Wellness Analytics", "Personalized Meal Plans", "No Advertisements"],
      buttonText: "Upgrade to Pro",
      isPro: true
    }
  ];

  const handleUpgrade = () => {
  // Replace this with your actual Stripe Payment Link
  window.location.href = "https://buy.stripe.com/test_bJe28q5PRa89dNwaNu3F600";
};

  return (
    /* mt-5 pt-4: Ensures it clears the fixed header on desktop
       pb-5: Ensures the bottom card isn't hidden by the mobile bottom nav 
    */
    <div className="container mt-5 pt-4 pb-5 mb-5">
      <div className="text-center mb-4 mb-md-5">
        <h2 className="fw-bold text-white display-6 display-md-5">
          Elevate Your <span className="text-success">Fitness Journey</span>
        </h2>
        <p className="text-white-50 px-3">Choose the plan that fits your health goals.</p>
      </div>

      {/* Changed row to use g-3 for tighter spacing on mobile */}
      <div className="row justify-content-center g-3 g-md-4 px-2">
        {plans.map((plan, index) => (
          <div key={index} className="col-12 col-md-5 col-lg-4">
            <div className={`card h-100 shadow-lg border-0 ${plan.isPro ? 'ring-active' : ''}`} 
                 style={{ 
                   borderRadius: '20px', 
                   overflow: 'hidden', 
                   background: '#1e293b', 
                   border: plan.isPro ? '2px solid #22c55e' : '1px solid #334155'
                 }}>
              
              {plan.isPro && (
                <div className="bg-success text-white text-center py-2 small fw-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="card-body p-4 d-flex flex-column text-white">
                <h4 className={`fw-bold mb-1 ${plan.isPro ? 'text-success' : 'text-white'}`}>{plan.name}</h4>
                <div className="mb-3">
                  <span className="display-5 fw-bold text-white">{plan.price}</span>
                  <span className="text-white-50">{plan.period}</span>
                </div>

                <ul className="list-unstyled mb-4 flex-grow-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 d-flex align-items-center small">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span className="text-white-50 text-start">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={plan.isPro ? handleUpgrade : null}
                  className={`btn w-100 py-3 fw-bold rounded-pill transition-all ${
                    plan.isPro ? 'btn-success shadow-sm' : 'btn-outline-secondary disabled border-white-50 text-white-50'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Small extra margin-bottom for mobile nav clearance */}
      <p className="text-center mt-5 mb-5 mb-md-0 small text-white-50 px-3 pb-4">
        Secure payments powered by <strong>Stripe</strong>. Cancel anytime.
      </p>
    </div>
  );
};

export default Upgrade;