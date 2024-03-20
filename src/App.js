// App.js
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import RegistrationPage from "./Components/Registration";
import OwnerWorkerSelectionPage from './Components/OwnerWorkerSelectionPage'; 
import LoginPage from './Components/Login';
import PlaceSelect from './Components/PlaceSelect';
import DashboardPage from './Components/Dashboard';

const App = () => {
    return (
        <div className='App-main'>
            <Router>
                <Routes>
                    <Route exact path="/Handlooms-connections" element={<LandingPage />} />
                    <Route path="/selection" element={<OwnerWorkerSelectionPage />} />
                    <Route path="/owner-registration" element={<RegistrationPage />} />
                    <Route path="/worker-registration" element={<RegistrationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/select" element={<PlaceSelect />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    {/* Add more routes for other pages */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;

