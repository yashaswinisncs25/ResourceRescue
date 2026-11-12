import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SearchResources from './pages/SearchResources';
import AddResource from './pages/AddResource';
import ResourceDetails from './pages/ResourceDetails';
import Requests from './pages/Requests';
import Transactions from './pages/Transactions';
import ImpactDashboard from './pages/ImpactDashboard';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<SearchResources />} />
            <Route path="/add-resource" element={<AddResource />} />
            <Route path="/resource/:id" element={<ResourceDetails />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/impact" element={<ImpactDashboard />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        {/* Floating AI Eco-Assistant */}
        <AIAssistant />

        <Footer />
      </div>
    </Router>
  );
}

export default App;