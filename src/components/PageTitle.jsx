import React from 'react';

export default function PageTitle({ title, subtitle }) {
  return (
    <div className="page-title-banner">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}