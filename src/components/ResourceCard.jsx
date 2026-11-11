import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResourceCard({ resource }) {
  const navigate = useNavigate();

  return (
    <div className="resource-card">
      <img src={resource.image} alt={resource.title} className="card-image" />
      <div className="card-content">
        <span className={`status-badge ${resource.status.toLowerCase()}`}>
          {resource.status}
        </span>
        <h3>{resource.title}</h3>
        <p className="category">{resource.category}</p>
        <p className="details"><strong>Quantity:</strong> {resource.quantity}</p>
        <p className="details"><strong>Location:</strong> {resource.location}</p>
        <button 
          onClick={() => navigate(`/resource/${resource.id}`)}
          className="btn-primary"
        >
          View Details
        </button>
      </div>
    </div>
  );
}