import React from 'react';

export default function TicketModal({ ticket, onClose }) {
  if (!ticket) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.4rem' }}>🎉</div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Registration Confirmed!</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Your official event entry pass has been generated and saved locally.
          </p>
        </div>

        {/* Digital Ticket Pass */}
        <div className="ticket-card">
          <div className="ticket-header">
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.7 }}>Official Entry Pass</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0.2rem 0' }}>{ticket.eventName}</h3>
              <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.2)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                {ticket.eventCategory}
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>Pass ID</span>
              <p style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '0.95rem' }}>{ticket.ticketId}</p>
            </div>
          </div>

          <div className="ticket-body">
            <div className="ticket-field">
              <label>Attendee Name</label>
              <p>{ticket.fullName}</p>
            </div>

            <div className="ticket-field">
              <label>Email Address</label>
              <p style={{ wordBreak: 'break-all' }}>{ticket.email}</p>
            </div>

            <div className="ticket-field">
              <label>College / Institute</label>
              <p>{ticket.college}</p>
            </div>

            <div className="ticket-field">
              <label>Year & Swag Size</label>
              <p>{ticket.yearOfStudy} ({ticket.tshirtSize})</p>
            </div>
          </div>

          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <div className="ticket-barcode">
              {Array.from({ length: 32 }).map((_, i) => (
                <div 
                  key={i} 
                  className="barcode-line" 
                  style={{ width: `${(i % 3) + 2}px`, opacity: i % 2 === 0 ? 0.9 : 0.4 }} 
                />
              ))}
            </div>
            <span style={{ fontSize: '0.68rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.6)', marginTop: '4px', display: 'block' }}>
              {ticket.ticketId} • PRESENT AT EVENT CHECK-IN
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', marginTop: '1.2rem' }}>
          <button className="btn-secondary" onClick={handlePrint}>
            🖨️ Print / Save PDF
          </button>
          <button className="btn-primary" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
