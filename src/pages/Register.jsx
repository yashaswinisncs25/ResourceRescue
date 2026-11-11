import React from 'react';
import PageTitle from '../components/PageTitle';

export default function Register() {
  return (
    <div className="page-container">
      <PageTitle title="Join ResourceRescue" subtitle="Create an account to donate or claim items" />
      <form className="form-card small-form" onSubmit={e => e.preventDefault()}>
        <label>Full Name</label>
        <input type="text" placeholder="John Doe" required />
        <label>Email</label>
        <input type="email" placeholder="user@gmail.com" required />
        <label>Password</label>
        <input type="password" required />
        <button type="submit" className="btn-primary">Register</button>
      </form>
    </div>
  );
}