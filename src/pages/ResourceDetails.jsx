import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import { mockResources } from '../data';

export default function ResourceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const resource = mockResources.find(r => r.id === parseInt(id)) || mockResources[0];

  return (
    <div className="page-container">
      <PageTitle title={resource.title} subtitle={`Category: ${resource.category}`} />
      <div className="details-wrapper">
        <img src={resource.image} alt={resource.title} className="details-image" />
        <div className="details-info">
          <p><strong>Quantity:</strong> {resource.quantity}</p>
          <p><strong>Location:</strong> {resource.location}</p>
          <p><strong>Donated By:</strong> {resource.donor}</p>
          <p><strong>Status:</strong> {resource.status}</p>
          <p className="description">{resource.description}</p>
          
          <button className="btn-primary" onClick={() => alert('Request Submitted!')}>
            Request Resource
          </button>
          <button className="btn-secondary" onClick={() => navigate(-1)} style={{ marginLeft: '10px' }}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}