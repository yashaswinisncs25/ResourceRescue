import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import SearchResources from './pages/SearchResources';
import ResourceDetails from './pages/ResourceDetails';
import AddResource from './pages/AddResource';
import Requests from './pages/Requests';
import Transactions from './pages/Transactions';
import Dashboard from './pages/Dashboard';
import ImpactDashboard from './pages/ImpactDashboard';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/search" element={<SearchResources />} />
            <Route path="/resource/:id" element={<ResourceDetails />} />
            <Route path="/add-resource" element={<AddResource />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/impact" element={<ImpactDashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}