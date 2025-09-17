// src/components/About/AboutUs.jsx
import React from 'react';
import IMGAbout from '@/assets/images/2.png'; // Your background image path

export default function AboutUs() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${IMGAbout})`,
      }}
    >
      {/* Overlay to darken the background for better readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main content */}
      <div className="relative max-w-4xl text-center px-6 py-12 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          About Us
        </h1>
        <p className="text-md sm:text-lg mb-10">
          "To be able to provide a level playing field for all educational institutions, rural or urban."
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Who we are
        </h2>
        <p className="text-md sm:text-lg max-w-3xl mx-auto">
          We, the college squad, are highly motivated to enhance student learning experiences by connecting parents, teachers, and colleges with cutting-edge automation solutions. We help teachers focus on academics by reducing routine tasks and keeping parents involved in their child’s progress.
        </p>
      </div>
    </div>
  );
}
