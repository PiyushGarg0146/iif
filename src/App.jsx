import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
    <h1 className="text-4xl font-bold text-green-700">AI-Powered Precision Agriculture</h1>
    <p className="mt-4 text-lg text-gray-600">Monitor crop health, optimize irrigation, and boost yield with AI.</p>
    <Link to="/dashboard" className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg">Get Started</Link>
  </div>
);

const Dashboard = () => (
  <div className="min-h-screen p-8 bg-white">
    <h2 className="text-3xl font-semibold text-green-700">Farm Dashboard</h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="p-6 bg-green-200 rounded-lg shadow-lg">Soil Moisture: 35%</div>
      <div className="p-6 bg-blue-200 rounded-lg shadow-lg">Temperature: 25°C</div>
      <div className="p-6 bg-yellow-200 rounded-lg shadow-lg">Humidity: 60%</div>
    </div>
  </div>
);

const CropScanner = () => (
  <div className="min-h-screen p-8 bg-gray-100">
    <h2 className="text-3xl font-semibold text-green-700">AI Crop Scanner</h2>
    <input type="file" className="mt-4 mr-2 p-2 border border-gray-300 rounded-lg" />
    <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg">Analyze</button>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav className="p-4 bg-green-700 text-white flex justify-between">
        <Link to="/" className="font-bold text-lg">Home</Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/scanner" className="hover:underline">Crop Scanner</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scanner" element={<CropScanner />} />
      </Routes>
    </Router>
  );
};

export default App
