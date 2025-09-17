// // src/components/Footer/Footer.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import AboutUs from './AboutUs';

// export default function OtherLinks() {
//   return (
//     <footer className="bg-gray-800 text-white py-6">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         <div className="mb-4 md:mb-0">
//           <p>&copy; {new Date().getFullYear()} Automated Attendance System. All rights reserved.</p>
//         </div>
//         <div className="flex space-x-4">
//           <Link to="/layout/AboutUs" className="hover:text-indigo-400">About Us</Link>
//           <Link to="/layout/Services" className="hover:text-indigo-400">Services</Link>
//           <Link to="/layout/ContactUs" className="hover:text-indigo-400">Contact Us</Link>
//           <Link to="/layout/PrivacyPolicy" className="hover:text-indigo-400">Privacy Policy</Link>
//           <Link to="/layout/Terms" className="hover:text-indigo-400">Terms of Use</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }






// src/components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 px-6 py-10">
      {/* Links Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-200 dark:border-gray-700 pb-8">
        
        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-indigo-600">About Us</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Blog</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Press</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Download Brochure</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Online Presentation</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Referral Program</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Contact Us</Link></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">FEATURES</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-indigo-600">Schedule Management</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Report Cards</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Transcripts</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Parent Portal</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Student Information</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Teacher Management</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Gradebook</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Messaging</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Admission System</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Fee Tracking</Link></li>
          </ul>
        </div>

        {/* Stories */}
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">STORIES</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-indigo-600">Stamford Elementary, VT</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Finger Lakes Christian, NY</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">St Matthew's Parish, CA</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">On Track, CA</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">La Paz Community, Costa Rica</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Origins Elementary, Pakistan</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">St. Monica Catholic, TX</Link></li>
          </ul>
        </div>

        {/* Segments */}
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">SEGMENTS</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-indigo-600">Adult Education</Link></li>
            <li><Link to="#" className="hover:text-indigo-600">Language School</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 space-y-6 md:space-y-0">
        
        {/* App Store Buttons */}
        <div className="flex space-x-4">
          <a href="#" className="border border-gray-300 dark:border-gray-700 rounded px-4 py-2 text-sm flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <img src="https://img.icons8.com/ios-filled/20/000000/apple-logo.png" alt="App Store" />
            <span>App Store</span>
          </a>
          <a href="#" className="border border-gray-300 dark:border-gray-700 rounded px-4 py-2 text-sm flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <img src="https://img.icons8.com/ios-filled/20/000000/google-logo.png" alt="Google Play" />
            <span>Google Play</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl text-gray-600 dark:text-gray-300">
          <a href="#" className="hover:text-indigo-600"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-indigo-600"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-indigo-600"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="hover:text-indigo-600"><i className="fab fa-youtube"></i></a>
          <a href="#" className="hover:text-indigo-600"><i className="fab fa-pinterest-p"></i></a>
          <a href="#" className="hover:text-indigo-600"><i className="fas fa-rss"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
