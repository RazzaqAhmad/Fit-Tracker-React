import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Navbar from './MyComponents/MyNavBar';
import Home from './MyComponents/Pages/Home';
import Diet from './MyComponents/Pages/Diet';
import Calories from './MyComponents/Pages/Calories';
import Exercise from './MyComponents/Pages/Exercise';
import Goals from './MyComponents/Pages/Goals';
import History from './MyComponents/Pages/History';
import PrivacyPolicy from './MyComponents/PrivacyPolicy';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Header usually stays at the top for both mobile/desktop or hidden on mobile */}
      <Header />

      {/* Change: Use d-flex instead of 'row' to handle the Sidebar better.
          flex-column for mobile (stacking) and flex-md-row for desktop (side-by-side).
      */}
      <div className="d-flex flex-column flex-md-row min-vh-100">
        
        {/* Our Responsive Navbar (Sidebar on Desktop, Bottom Bar on Mobile) */}
        <Navbar />

        {/* Main Content Area 
            Added 'flex-grow-1' to take remaining space.
            Added padding-bottom on mobile to prevent the Bottom Nav from covering content.
        */}
        <div className="flex-grow-1 d-flex flex-column" 
             style={{ 
               overflowX: 'hidden', 
               paddingBottom: '70px', // Space for Bottom Nav on Mobile
               paddingBottomMd: '0px'  // Reset for Desktop
             }}>
          
          <main className="container-fluid py-3 flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/diet" element={<Diet />} />
              <Route path="/calories" element={<Calories />} />
              <Route path="/exercise" element={<Exercise />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/history" element={<History />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </main>

          {/* Footer sits at the bottom of the content area */}
          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;