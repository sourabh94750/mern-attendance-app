// // src/components/Home/HomePage.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import Login from '@/pages/Login';
// import IMGFirst from '@/assets/images/1.png';

// export default function HomePage() {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
//       style={{
//         backgroundImage:  `url(${IMGFirst})`
//       }}
//     >
//       {/* Overlay to darken the background for better readability */}
//       <div className="absolute inset-0 bg-black opacity-60"></div>

//       {/* Main content */}
//       <div className="relative max-w-5xl text-center px-6 py-12 text-white">
//         <h1 className="text-4xl font-bold mb-6">
//           Automated Student <br />
//           Attendance Monitoring and Analytics System for Colleges
//         </h1>
//         <p className="text-lg mb-6">
//           Enhance campus management with real-time attendance tracking, data analysis, and student performance insights.
//         </p>
//         <Link to="/pages/login" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded">
//           Start Now
//         </Link>
//         {/* <div className="mt-10">
//           <img
//             src={IMGFirst}
//             alt="Student Attendance Illustration"
//             className="mx-auto w-full max-w-md rounded shadow-lg"
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// }



// src/components/Home/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import IMGFirst from '@/assets/images/1.png'; // Your background image

export default function HomePage() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${IMGFirst})`
      }}
    >
      {/* Overlay to darken the background for better readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main content */}
      <div className="relative max-w-5xl text-center px-6 py-12 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
     Campus Management Solutions for Educational Institutions
        </h1>
        <p className="text-md sm:text-lg mb-6">
          Enhance campus management with real-time attendance tracking, data analysis, and student performance insights.
        </p>
        <Link
          to="/pages/login"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded"
        >
          Start Now
        </Link>
      </div>
    </div>
  );
}
