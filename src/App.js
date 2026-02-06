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
      <div className="fixed-header px-3">
        <Header />
      </div>

      <div className="d-flex flex-column flex-md-row min-vh-100">
        <Navbar />

        <div className="flex-grow-1 main-content-area">
          <main className="container py-4">
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
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;