import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Wizard from './pages/Wizard.jsx';

function App() {
    return (
        <Router>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/wizard" element={<Wizard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
