import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/dashboard"> Overview</Link></li>
        <li><Link to="/add-resource"> Post Resource</Link></li>
        <li><Link to="/requests"> Manage Requests</Link></li>
        <li><Link to="/transactions"> Transactions History</Link></li>
        <li><Link to="/impact"> Impact Metrics</Link></li>
      </ul>
    </aside>
  );
}