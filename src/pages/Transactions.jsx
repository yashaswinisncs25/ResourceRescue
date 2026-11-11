import React from 'react';
import PageTitle from '../components/PageTitle';
import { mockTransactions } from '../data';

export default function Transactions() {
  return (
    <div className="page-container">
      <PageTitle title="Transaction History" subtitle="Track claimed and delivered resources" />
      <table className="data-table">
        <thead>
          <tr>
            <th>TX ID</th>
            <th>Resource</th>
            <th>Donor</th>
            <th>Recipient</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockTransactions.map(tx => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.resource}</td>
              <td>{tx.donor}</td>
              <td>{tx.recipient}</td>
              <td>{tx.date}</td>
              <td><span className="status-badge completed">{tx.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}