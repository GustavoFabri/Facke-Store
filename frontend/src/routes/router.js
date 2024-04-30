import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import App from '../App';


export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/login" element={<Login />} />
                
            </Routes>
          

             

        
        </Router>
    );
}
