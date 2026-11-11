import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="hero">
        <h1>Rescue Surplus, Restore Hope</h1>
        <p>Connecting surplus resources with local communities to minimize waste and maximize sustainability.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate('/search')} className="btn-primary">Browse Resources</button>
          <button onClick={() => navigate('/add-resource')} className="btn-secondary">Share Surplus</button>
        </div>
      </header>
      
      <section className="features-grid">
        <div className="feature-card">
          <h3>📦 Share Surplus</h3>
          <p>Easily post items, food, or equipment you no longer need.</p>
        </div>
        <div className="feature-card">
          <h3>🤝 Local Claim</h3>
          <p>Connect with non-profits and individuals who can reuse your surplus.</p>
        </div>
        <div className="feature-card">
          <h3>🌍 Track Impact</h3>
          <p>See how much waste you prevent and monitor real-time environmental benefit.</p>
        </div>
      </section>
    </div>
  );
}