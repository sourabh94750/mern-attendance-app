// src/components/Logout/Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage or any state management
    localStorage.removeItem('userToken'); // Example: Remove auth token
    localStorage.removeItem('userRole');  // Example: Remove user role

    // Optionally clear other state or context here

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4">Are you sure you want to logout?</h2>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
