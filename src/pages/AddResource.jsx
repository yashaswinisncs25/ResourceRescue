import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';

export default function AddResource() {
  const [formData, setFormData] = useState({ title: '', category: 'Food & Agriculture', quantity: '', location: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Resource listed successfully!');
  };

  return (
    <div className="page-container">
      <PageTitle title="List a New Resource" subtitle="Share surplus items with those in need" />
      <form className="form-card" onSubmit={handleSubmit}>
        <label>Resource Title</label>
        <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />

        <label>Category</label>
        <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
          <option>Food & Agriculture</option>
          <option>Furniture</option>
          <option>Electronics</option>
          <option>Clothing</option>
        </select>

        <label>Quantity / Amount</label>
        <input type="text" required value={formData.quantity} onChange={e => setFormData({...formData, quantity: e.target.value})} />

        <label>Pickup Location</label>
        <input type="text" required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />

        <label>Description</label>
        <textarea rows="4" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>

        <button type="submit" className="btn-primary">Post Listing</button>
      </form>
    </div>
  );
}