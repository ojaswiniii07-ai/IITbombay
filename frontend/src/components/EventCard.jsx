import React from 'react';

export default function EventCard({
  event,
  isBookmarked,
  onToggleBookmark,
  onViewDetails,
  onRegisterClick
}) {
  const seatsPercentage = Math.round(((event.totalSeats - event.seatsLeft) / event.totalSeats) * 100);

  return (
    <div className="event-card" id={`event-card-${event.id}`}>
      <div className="card-image-wrapper">
        <img src={event.image} alt={event.name} className="card-image" loading="lazy" />
        <span className="card-badge">{event.category}</span>

        <button
          className={`card-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`}
          onClick={() => onToggleBookmark(event.id)}
          title={isBookmarked ? 'Remove from Saved' : 'Save Event'}
          aria-label="Bookmark event"
        >
          {isBookmarked ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="card-content">
        <div className="card-meta">
          <span>📅 {event.date}</span>
          <span>•</span>
          <span>⏰ {event.time}</span>
        </div>

        <h3 className="card-title">{event.name}</h3>
        <p className="card-desc">{event.shortDescription}</p>

        <div className="card-seats">
          <div className="seats-header">
            <span>Seats Filled</span>
            <span>{event.totalSeats - event.seatsLeft} / {event.totalSeats} ({event.seatsLeft} left)</span>
          </div>
          <div className="seats-bar">
            <div className="seats-fill" style={{ width: `${seatsPercentage}%` }}></div>
          </div>
        </div>

        <div className="card-footer-actions">
          <button className="btn-card-reg" onClick={() => onRegisterClick(event.id)}>
            Register Now
          </button>
          <button className="btn-card-info" onClick={() => onViewDetails(event)}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
