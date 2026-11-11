import React, { useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import PageTitle from '../components/PageTitle';
import { mockResources } from '../data';

export default function SearchResources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = mockResources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = category === 'All' || res.category === category;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="page-container">
      <PageTitle title="Find Surplus Resources" subtitle="Discover items available near you" />
      
      <div className="filter-bar">
        <input 
          type="text" 
          placeholder="Search by keywords..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Food & Agriculture">Food & Agriculture</option>
          <option value="Furniture">Furniture</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      <div className="resource-grid">
        {filtered.map(res => (
          <ResourceCard key={res.id} resource={res} />
        ))}
      </div>
    </div>
  );
}