import React from 'react';
import PageTitle from '../components/PageTitle';

export default function Login() {
  return (
    <div className="page-container">
      <PageTitle title="Welcome Back" subtitle="Log in to access your account" />
      <form className="form-card small-form" onSubmit={e => e.preventDefault()}>
        <label>Email</label>
        <input type="email" placeholder="user@gmail.com" required />
        <label>Password</label>
        <input type="password" required />
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </div>
  );
}