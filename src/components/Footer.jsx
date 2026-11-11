import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} ResourceRescue. Empowering community sharing & reducing waste.</p>
      </div>
    </footer>
  );
}