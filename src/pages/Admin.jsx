import React from 'react';
import PageTitle from '../components/PageTitle';

export default function Admin() {
  return (
    <div className="page-container">
      <PageTitle title="Admin Control Panel" subtitle="Manage system platform settings and users" />
      <div className="stats-row">
        <div className="stat-card">
          <h4>Total Users</h4>
          <p>1,240</p>
        </div>
        <div className="stat-card">
          <h4>Flagged Items</h4>
          <p>0</p>
        </div>
        <div className="stat-card">
          <h4>System Health</h4>
          <p>100%</p>
        </div>
      </div>
    </div>
  );
}