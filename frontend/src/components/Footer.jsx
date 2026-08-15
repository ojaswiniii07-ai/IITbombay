import React from 'react';

export default function Footer({ onCategorySelect }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: '1rem' }}>
              <div className="logo-icon">⚡</div>
              <span>TechEvents</span>
            </div>
            <p style={{ maxWidth: '360px', color: 'var(--text-muted)' }}>
              Centralized platform for students to discover, compete, and register for flagship college technical events, hackathons, and AI workshops.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Quick Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#events" className="nav-link">Event Catalog</a></li>
              <li><a href="#register" className="nav-link">Registration Form</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Popular Categories</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><button className="nav-link" onClick={() => onCategorySelect('Coding')}>Competitive Coding</button></li>
              <li><button className="nav-link" onClick={() => onCategorySelect('Hackathon')}>Hackathons</button></li>
              <li><button className="nav-link" onClick={() => onCategorySelect('Artificial Intelligence')}>Artificial Intelligence</button></li>
              <li><button className="nav-link" onClick={() => onCategorySelect('Cybersecurity')}>Cybersecurity</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Tech Event Management Portal. Built with HTML, CSS, JavaScript & React. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
