// import React from 'react'
// import { Link } from 'react-router-dom';


// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 mt-8">
//       <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
//         <div className="mb-2">
//           <a href="/privacy" className="hover:underline mx-2">Privacy Policy</a>
//           <a href="/terms" className="hover:underline mx-2">Terms of Service</a>
//           <a href="/support" className="hover:underline mx-2">Support</a>
//         </div>
//         <div>&copy; {new Date().getFullYear()} Student Attendance Platform. All rights reserved.</div>
//       </div>
//     </footer>
//   )
// }

// export default Footer



// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-8 transition-colors duration-300">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-300">
        
        <div className="mb-4 flex flex-wrap justify-center gap-4">
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/support" className="hover:underline">
            Support
          </Link>
        </div>
        
        <div>
          &copy; {new Date().getFullYear()} Student Attendance Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
