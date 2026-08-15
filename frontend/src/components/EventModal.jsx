import React from 'react';

export default function EventModal({ event, onClose, onRegisterNow }) {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>

        <div style={{ marginBottom: '1.2rem' }}>
          <span className="card-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '0.8rem' }}>
            {event.category}
          </span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{event.name}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            📍 {event.location} &nbsp;|&nbsp; 📅 {event.date} at {event.time}
          </p>
        </div>

        <img 
          src={event.image} 
          alt={event.name} 
          style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }} 
        />

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>About the Event</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{event.fullDescription}</p>
        </div>

        {event.speaker && (
          <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>🎙️ Key Speaker</h4>
            <p style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>{event.speaker}</p>
          </div>
        )}

        {event.agenda && event.agenda.length > 0 && (
          <div style={{ marginBottom: '1.8rem' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--accent-primary)' }}>📋 Schedule & Agenda</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {event.agenda.map((item, index) => (
                <li key={index} style={{ padding: '0.5rem 0.8rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button className="btn-secondary" onClick={onClose}>Close</button>
          <button 
            className="btn-primary" 
            onClick={() => {
              onClose();
              onRegisterNow(event.id);
            }}
          >
            ✍️ Proceed to Register
          </button>
        </div>
      </div>
    </div>
  );
}
