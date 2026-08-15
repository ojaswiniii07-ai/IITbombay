import React, { useState, useEffect } from 'react';

export default function Hero({ onExploreClick, onRegisterClick }) {
  // Live countdown to HackNova (September 12, 2026)
  const targetDate = new Date('2026-09-12T09:00:00+05:30').getTime();
  
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow"></div>
      
      <div className="container hero-content">
        <div className="hero-pill">
          <span>🚀 Tech Events Season 2026 Open</span>
        </div>

        <h1 className="hero-title">
          Discover, Build & Excel at <br />
          <span className="gradient-text">IIT Technical Events</span>
        </h1>

        <p className="hero-description">
          The ultimate portal for tech enthusiasts. Discover hackathons, competitive coding battles, 
          AI workshops, cybersecurity CTFs, and robotics challenges all in one place.
        </p>

        <div className="hero-ctas">
          <button className="btn-primary" onClick={onExploreClick}>
            🔍 Explore Events
          </button>
          <button className="btn-secondary" onClick={onRegisterClick}>
            ✍️ Quick Registration
          </button>
        </div>

        {/* Countdown Box to Flagship Event */}
        <div className="countdown-box">
          <div className="countdown-info">
            <h4>🔥 Flagship Event: HackNova 48H</h4>
            <p>48-Hour Hackathon with ₹1,50,000 Cash Prize pool</p>
          </div>

          <div className="countdown-timer">
            <div className="timer-item">
              <span className="timer-value">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="timer-label">Days</span>
            </div>
            <div className="timer-item">
              <span className="timer-value">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="timer-label">Hours</span>
            </div>
            <div className="timer-item">
              <span className="timer-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="timer-label">Mins</span>
            </div>
            <div className="timer-item">
              <span className="timer-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="timer-label">Secs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
