import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import LoginSignup from './LoginSignup';
import Home from './Home';

const App = () => {
    return (
        <Router>
            <Routes> {/* Gunakan Routes di sini */}
                <Route path="/" element={<LoginSignup />} /> {/* Gunakan element prop */}
                <Route path="/home" element={<Home />} /> {/* Gunakan element prop */}
            </Routes>
        </Router>
    );
}

export default App;
