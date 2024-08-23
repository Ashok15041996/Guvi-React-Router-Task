import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AllCourses from './pages/AllCourses';
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/all" element={<AllCourses />} />
                <Route path="/fullstack" element={<FullStack />} />
                <Route path="/datascience" element={<DataScience />} />
                <Route path="/cybersecurity" element={<CyberSecurity />} />
                <Route path="/career" element={<Career />} />
            </Routes>
        </Router>
    );
}

export default App;
