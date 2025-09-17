// src/components/Student/StudentDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [attendance, setAttendance] = useState(75); // Example percentage
  const [subjects, setSubjects] = useState([
    { name: 'Math', attendance: 80 },
    { name: 'Science', attendance: 70 },
    { name: 'History', attendance: 90 },
  ]);
  const [schedule, setSchedule] = useState([
    { day: 'Monday', class: 'Math' },
    { day: 'Tuesday', class: 'Science' },
    { day: 'Wednesday', class: 'History' },
  ]);
  const [leaveRequest, setLeaveRequest] = useState({ reason: '', document: null });
  const [approvalStatus, setApprovalStatus] = useState('Pending');
  const [notifications, setNotifications] = useState([
    'Class schedule updated.',
    'New attendance report available.',
  ]);

  useEffect(() => {
    // You can fetch real data here with axios
    // Example: axios.get('/api/student/attendance').then(...)
  }, []);

  const handleLeaveSubmit = async (e) => {
    e.preventDefault();
    // Example: send leave request
    try {
      // await axios.post('/api/student/leave', leaveRequest);
      alert('Leave request submitted!');
    } catch (error) {
      console.error(error);
      alert('Failed to submit leave request.');
    }
  };

  const handleLogout = () => {
    // Clear session or token
    navigate('/login');
  };

  const handleScan = () => {
    alert('Scanning QR / Facial Recognition...');
    // Implement actual scanning logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

        {/* Dashboard Overview */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">My Attendance</h2>
          <p className="text-lg">{attendance}%</p>
        </div>

        {/* Scan QR / Facial Recognition */}
        <div className="mb-6">
          <button
            onClick={handleScan}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Scan QR / Facial Recognition
          </button>
        </div>

        {/* Subject-wise Attendance */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Subject-wise Attendance</h2>
          <ul>
            {subjects.map((sub, index) => (
              <li key={index}>
                {sub.name}: {sub.attendance}%
              </li>
            ))}
          </ul>
        </div>

        {/* Weekly Classes Schedule */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Weekly Classes Schedule</h2>
          <ul>
            {schedule.map((sch, index) => (
              <li key={index}>
                {sch.day}: {sch.class}
              </li>
            ))}
          </ul>
        </div>

        {/* Leave Request */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Leave Request</h2>
          <form onSubmit={handleLeaveSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Reason</label>
              <input
                type="text"
                name="reason"
                value={leaveRequest.reason}
                onChange={(e) =>
                  setLeaveRequest({ ...leaveRequest, reason: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Upload Document</label>
              <input
                type="file"
                onChange={(e) =>
                  setLeaveRequest({ ...leaveRequest, document: e.target.files[0] })
                }
                className="w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Track Approval Status */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Approval Status</h2>
          <p>{approvalStatus}</p>
        </div>

        {/* Notifications */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <ul>
            {notifications.map((note, index) => (
              <li key={index} className="text-sm">
                - {note}
              </li>
            ))}
          </ul>
        </div>

        {/* Help and Logout */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => alert('Help & Support')}
            className="text-blue-600 hover:underline"
          >
            Help & Support
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
