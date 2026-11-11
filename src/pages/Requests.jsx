import React from 'react';
import PageTitle from '../components/PageTitle';
import { mockRequests } from '../data';

export default function Requests() {
  return (
    <div className="page-container">
      <PageTitle title="Resource Requests" subtitle="Manage incoming claim requests" />
      <table className="data-table">
        <thead>
          <tr>
            <th>Resource</th>
            <th>Requested By</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mockRequests.map(req => (
            <tr key={req.id}>
              <td>{req.resourceTitle}</td>
              <td>{req.requestedBy}</td>
              <td>{req.requestDate}</td>
              <td>{req.notes}</td>
              <td><span className={`status-badge ${req.status.toLowerCase()}`}>{req.status}</span></td>
              <td>
                <button className="btn-sm">Approve</button>
                <button className="btn-sm danger">Decline</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}