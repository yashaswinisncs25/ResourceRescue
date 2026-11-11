import React from 'react';
import PageTitle from '../components/PageTitle';

export default function ImpactDashboard() {
  return (
    <div className="page-container">
      <PageTitle title="Environmental Impact" subtitle="Real-time metrics on waste diversion" />
      <div className="stats-row">
        <div className="stat-card highlight">
          <h3>2,450 kg</h3>
          <p>Waste Diverted</p>
        </div>
        <div className="stat-card highlight">
          <h3>1,120</h3>
          <p>Meals/Items Shared</p>
        </div>
        <div className="stat-card highlight">
          <h3>4.8 Tons</h3>
          <p>CO₂ Saved</p>
        </div>
      </div>
    </div>
  );
}