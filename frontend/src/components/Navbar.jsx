import React from 'react';

export default function Navbar({ theme, toggleTheme, bookmarkedCount, registeredCount, activeTab, setActiveTab }) {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={() => setActiveTab('home')}>
          <div className="logo-icon">⚡</div>
          <span>TechEvents</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#events" 
                className={`nav-link ${activeTab === 'events' ? 'active' : ''}`}
                onClick={() => setActiveTab('events')}
              >
                Explore Events
              </a>
            </li>
            <li>
              <a 
                href="#bookmarks" 
                className={`nav-link ${activeTab === 'bookmarks' ? 'active' : ''}`}
                onClick={() => setActiveTab('bookmarks')}
              >
                Saved {bookmarkedCount > 0 && <span className="badge">{bookmarkedCount}</span>}
              </a>
            </li>
            <li>
              <a 
                href="#register" 
                className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => setActiveTab('register')}
              >
                Registration
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          {registeredCount > 0 && (
            <button 
              className="btn-secondary" 
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
              onClick={() => setActiveTab('my-tickets')}
            >
              🎟️ My Passes <span className="badge" style={{ background: '#ec4899' }}>{registeredCount}</span>
            </button>
          )}

          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme} 
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
