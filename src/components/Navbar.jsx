import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => navigate('/')}>
        🌱 ResourceRescue
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search Resources</Link>
        <Link to="/add-resource">Add Resource</Link>
        <Link to="/requests">Requests</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/impact">Impact</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login" className="btn-secondary">Login</Link>
        <Link to="/register" className="btn-primary">Register</Link>
      </div>
    </nav>
  );
}