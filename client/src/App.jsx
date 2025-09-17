import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/MainLayout"; 
import Register from "./pages/Register";
import Login from './pages/Login';
import HomePage from './layout/HomePage';
import AboutUs from './layout/AboutUs';
import Services from './layout/Services';
import ContactUs from './layout/ContactUs';

// import HomePage from './components/Student/Home/HomePage';

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="/pages/register" element={<Register />} />
        <Route path="/pages/login" element={<Login />} />
        <Route path="/layout/HomePage" element={<HomePage />} />
        <Route path="/layout/AboutUs" element={<AboutUs />} />
        <Route path="/layout/Services" element={<Services />} />
        <Route path="/layout/ContactUs" element={<ContactUs />} />
        </Route>
    </Routes>
  );
}

export default App;