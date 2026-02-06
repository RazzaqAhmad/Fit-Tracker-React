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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <div className="container-fluid">
        <div className="row flex-nowrap"> 
          
          <Navbar />
          <div className="col py-3">
            <div className='container-fluid'>
              <Routes>
                <Route path="/" element={
                  <>
                    <Home />
                  </>
                } />
                <Route path="/diet" element={
                  <>
                    <Diet />
                  </>
                } />
                <Route path="/calories" element={
                  <>
                    <Calories />
                  </>
                } />
                <Route path="/exercise" element={
                  <>
                    <Exercise />  
                  </>
                } />
                <Route path="/goals" element={
                  <>
                    <Goals />
                  </>
                } />
                <Route path="/history" element={
                  <>
                    <History />
                  </>
                } />
              </Routes>
            </div>
            
            <Footer />
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;