import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo on the left */}
        <div>
          <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            ARROW
          </Link>
        </div>

        {/* Navigation links in the center */}
        <div className="hidden md:flex space-x-6 mx-auto">
          <Link to="/layout/HomePage" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Home
          </Link>
          <Link to="/layout/AboutUs" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            About Us
          </Link>
          <Link to="/layout/Services" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Services
          </Link>
          <Link to="/layout/ContactUs" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Contact Us
          </Link>
        </div>

        {/* Right side with Profile and Dark mode toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
          <Link to="/pages/login" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Profile
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col items-center space-y-2 py-4">
          <Link to="/layout/HomePage" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Home
          </Link>
          <Link to="/layout/AboutUs" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            About Us
          </Link>
          <Link to="/layout/Services" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Services
          </Link>
          <Link to="/layout/ContactUs" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Contact Us
          </Link>
          <Link to="/pages/login" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;






// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   // Toggle dark mode by adding/removing class on body
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
//       <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        
//         {/* Top section with brand and toggle */}
//         <div className="flex items-center justify-between">
//           <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
//             ARROW
//           </Link>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="ml-4 bg-gray-200 dark:bg-gray-700 p-2 rounded"
//             aria-label="Toggle Dark Mode"
//           >
//             {darkMode ? "🌙" : "☀️"}
//           </button>
//         </div>

//         {/* Menu Items in middle */}
//         <div className="mt-4 md:mt-0 md:flex md:space-x-8 md:justify-center">
//           <Link to="/layout/HomePage" className="block text-center py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             Home
//           </Link>
//           <Link to="/layout/AboutUs" className="block text-center py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             About Us
//           </Link>
//           <Link to="/layout/Services" className="block text-center py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             Services
//           </Link>
//           <Link to="/layout/ContactUs" className="block text-center py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             Contact Us
//           </Link>
//           <Link to="/pages/login" className="block text-center py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             Profile
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;





// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
//         {/* Logo on the left */}
//         <div>
//           <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
//             ARROW
//           </Link>
//         </div>

//         {/* Navigation links in the center */}
//         <div className="hidden md:flex space-x-6 mx-auto">
//           <Link to="/layout/HomePage" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             Home
//           </Link>
//           <Link to="/layout/AboutUs" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             About Us
//           </Link>
//           <Link to="/layout/Services" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             Services
//           </Link>
//           <Link to="/layout/ContactUs" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             Contact Us
//           </Link>
//         </div>

//         {/* Dark mode toggle on the right */}
//         <div>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="bg-gray-200 dark:bg-gray-700 p-2 rounded"
//             aria-label="Toggle Dark Mode"
//           >
//             {darkMode ? "🌙" : "☀️"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
//         <div className="flex flex-col items-center space-y-2 py-4">
//           <Link to="/layout/HomePage" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             Home
//           </Link>
//           <Link to="/layout/AboutUs" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             About Us
//           </Link>
//           <Link to="/layout/Services" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             Services
//           </Link>
//           <Link to="/layout/ContactUs" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
