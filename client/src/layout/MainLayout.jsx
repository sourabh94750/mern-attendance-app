import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import OtherLinks from './OtherLinks';


export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-6">
                <Outlet />
                </main>
                <HomePage />
                <Services />
                <AboutUs />
                <ContactUs />
                <OtherLinks />

                {/* <StudentDashboard /> */}
            
            <Footer />
        </div>
    );
}