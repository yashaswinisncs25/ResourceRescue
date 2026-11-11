import React from 'react';
import Sidebar from '../components/Sidebar';
import PageTitle from '../components/PageTitle';

export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">
        <PageTitle title="User Dashboard" subtitle="Overview of your activities and listings" />
        <div className="stats-row">
          <div className="stat-card">
            <h4>Active Listings</h4>
            <p>5</p>
          </div>
          <div className="stat-card">
            <h4>Claim Requests</h4>
            <p>3</p>
          </div>
          <div className="stat-card">
            <h4>Saved Items</h4>
            <p>12</p>
          </div>
        </div>
      </main>
    </div>
  );
}