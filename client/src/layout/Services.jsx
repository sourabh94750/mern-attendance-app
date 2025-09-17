import React, { useState, useEffect } from "react";
import "./Services.css";

// ✅ Import local images (place these in src/assets/images/)
import IMG1 from "@/assets/images/1.png";
// import IMG2 from "@/assets/images/2.png";
// import IMG3 from "@/assets/images/3.png";
// import IMG4 from "@/assets/images/4.png";
// import IMG5 from "@/assets/images/5.png";
// import IMG6 from "@/assets/images/6.png";

export default function Services() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // ✅ Use local imports for all 6 cards
    const cards = [
        { title: "Dashboards & Reports", img: IMG1 },
        { title: "Easy & Intuitive Solutions", img: IMG1 },
        { title: "Data Security", img: IMG1 },
        { title: "Quickest ROI", img: IMG1 },
        { title: "QR Scan", img: IMG1 },
        { title: "Help and support", img: IMG1 },

    ];

    return (
        <div className="min-h-[150px] bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 flex flex-col items-center justify-center py-6 transition-colors duration-500">


            <h1 className="text-3xl font-bold mb-8">Our Services</h1>

            <div className="w-full overflow-hidden relative">

                <div className="marquee marquee-right">
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Dashboards & Reports</span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Easy & Intuitive Solutions
                    </span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Data Security
                    </span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Quickest ROI
                    </span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Reports</span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Admin tools</span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">QR Scan</span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Help and support</span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Centralized Database</span>
                </div>
            </div>

            {/* ✅ Responsive Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl px-4">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg group"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${IMG1})` }}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500" />
                        {/* Content */}
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <h2 className="text-xl sm:text-2xl font-bold text-white text-center px-2">
                                {card.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full overflow-hidden relative">
                <div className="marquee marquee-left">
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Dashboards & Reports</span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Easy & Intuitive Solutions
                    </span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Data Security
                    </span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Quickest ROI
                    </span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Reports</span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Admin tools</span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">QR Scan</span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Help and support</span>
                    <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Centralized Database</span>
                </div>
            </div>
        </div>
    );
}










// import React, { useState, useEffect } from 'react';
// import './Services.css'; // Assuming your CSS is already configured

// import IMGFirst from '@/assets/images/1.png'; // Your background image

// export default function Services() {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     // This useEffect syncs the state with the `dark` class on the HTML element
//     useEffect(() => {
//         if (isDarkMode) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, [isDarkMode]);

//     const toggleTheme = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     // The component's main container now uses a dark mode class
//     // The bg-white is for light mode, and dark:bg-gray-900 is for dark mode.
//     return (
//         <div className="min-h-[150px] bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 flex flex-col items-center justify-center py-6 transition-colors duration-500">
//             <h1 className="text-2xl font-bold mb-4">Our Services</h1>
//             <div className="w-full overflow-hidden relative">
//                 <div className="marquee marquee-right">
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Admission</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Exam</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Fees</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Info</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Reports</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Admin tools</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Scan</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Help</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Risk</span>
//                 </div>

//                 <div>
//                     <div className="container mx-auto px-4 py-16 text-center text-white">
//                         <div className="grid grid-cols-3 md:grid-cols-3 gap-8 justify-items-center object-">
//                             {/* First Service Card */}

//                             <div
//                                 className="flex min-h-screen items-center justify-center bg-cover bg-center"
//                                 style={{
//                                     backgroundImage: `url(${IMGFirst})`
//                                 }}
//                             >
//                                 <div className="max-w-md p-6 bg-gray-900 bg-opacity-75 rounded-lg shadow-xl backdrop-blur-sm transform transition duration-500 hover:scale-105">
//                                     <h2 className="text-3xl font-bold mb-4">Digital Marketing</h2>
//                                     <p className="text-lg">
//                                         We provide comprehensive digital marketing solutions including SEO, social media management, and content creation to help your business grow online.
//                                     </p>
//                                 </div>
//                             </div>

//                             <div
//                                 className="flex min-h-screen items-center justify-center bg-cover bg-center"
//                                 style={{
//                                     backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
//                                 }}
//                             >
//                                 <div className="max-w-md p-6 bg-gray-900 bg-opacity-75 rounded-lg shadow-xl backdrop-blur-sm transform transition duration-500 hover:scale-105">
//                                     <h2 className="text-3xl font-bold mb-4">Digital Marketing</h2>
//                                     <p className="text-lg">
//                                         We provide comprehensive digital marketing solutions including SEO, social media management, and content creation to help your business grow online.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div
//                                 className="flex min-h-screen items-center justify-center bg-cover bg-center"
//                                 style={{
//                                     backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
//                                 }}
//                             >
//                                 <div className="max-w-md p-6 bg-gray-900 bg-opacity-75 rounded-lg shadow-xl backdrop-blur-sm transform transition duration-500 hover:scale-105">
//                                     <h2 className="text-3xl font-bold mb-4">Digital Marketing</h2>
//                                     <p className="text-lg">
//                                         We provide comprehensive digital marketing solutions including SEO, social media management, and content creation to help your business grow online.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div
//                                 className="flex min-h-screen items-center justify-center bg-cover bg-center"
//                                 style={{
//                                     backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
//                                 }}
//                             >
//                                 <div className="max-w-md p-6 bg-gray-900 bg-opacity-75 rounded-lg shadow-xl backdrop-blur-sm transform transition duration-500 hover:scale-105">
//                                     <h2 className="text-3xl font-bold mb-4">Digital Marketing</h2>
//                                     <p className="text-lg">
//                                         We provide comprehensive digital marketing solutions including SEO, social media management, and content creation to help your business grow online.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div
//                                 className="flex min-h-screen items-center justify-center bg-cover bg-center"
//                                 style={{
//                                     backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
//                                 }}
//                             >
//                                 <div className="max-w-md p-6 bg-gray-900 bg-opacity-75 rounded-lg shadow-xl backdrop-blur-sm transform transition duration-500 hover:scale-105">
//                                     <h2 className="text-3xl font-bold mb-4">Digital Marketing</h2>
//                                     <p className="text-lg">
//                                         We provide comprehensive digital marketing solutions including SEO, social media management, and content creation to help your business grow online.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div
//                                 className="flex min-h-screen items-center justify-center bg-cover bg-center"
//                                 style={{
//                                     backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
//                                 }}
//                             >
//                                 <div className="max-w-md p-6 bg-gray-900 bg-opacity-75 rounded-lg shadow-xl backdrop-blur-sm transform transition duration-500 hover:scale-105">
//                                     <h2 className="text-3xl font-bold mb-4">Digital Marketing</h2>
//                                     <p className="text-lg">
//                                         We provide comprehensive digital marketing solutions including SEO, social media management, and content creation to help your business grow online.
//                                     </p>
//                                 </div>
//                             </div>


//                         </div>
//                     </div>
//                 </div>




//                 <div className="marquee marquee-left">
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Admission</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Exam</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Fees</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Info</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Reports</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Admin tools</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Scan</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Help</span>
//                     <span className="px-4 py-2 bg-indigo-600 dark:bg-indigo-800 text-white rounded-full">Risk</span>
//                 </div>
//             </div>
//         </div>
//     );
// }


