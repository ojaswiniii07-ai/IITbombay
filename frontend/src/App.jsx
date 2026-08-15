import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventFilter from './components/EventFilter';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import RegistrationForm from './components/RegistrationForm';
import TicketModal from './components/TicketModal';
import Footer from './components/Footer';

import { initialEvents, categoriesList } from './data/eventsData';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('tech_events_theme') || 'dark';
  });

  // Bookmarks state (localStorage)
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    const saved = localStorage.getItem('tech_events_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  // Tickets state (localStorage)
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem('tech_events_tickets');
    return saved ? JSON.parse(saved) : [];
  });

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  // Modal states
  const [modalEvent, setModalEvent] = useState(null);
  const [registrationEventId, setRegistrationEventId] = useState('');
  const [activeTicket, setActiveTicket] = useState(null);
  const [showMyTicketsModal, setShowMyTicketsModal] = useState(false);

  // Sync theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tech_events_theme', theme);
  }, [theme]);

  // Sync bookmarks
  useEffect(() => {
    localStorage.setItem('tech_events_bookmarks', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  // Sync tickets
  useEffect(() => {
    localStorage.setItem('tech_events_tickets', JSON.stringify(tickets));
  }, [tickets]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleBookmark = (id) => {
    setBookmarkedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleRegisterClick = (eventId) => {
    setRegistrationEventId(eventId);
    const regForm = document.getElementById('register');
    if (regForm) {
      regForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmission = (newTicket) => {
    setTickets(prev => [newTicket, ...prev]);
    setActiveTicket(newTicket);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  // Filtered Events logic
  const filteredEvents = initialEvents.filter(event => {
    const matchesCategory =
      selectedCategory === 'All' || event.category === selectedCategory;

    const matchesSearch =
      searchQuery.trim() === '' ||
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab =
      activeTab !== 'bookmarks' || bookmarkedIds.includes(event.id);

    return matchesCategory && matchesSearch && matchesTab;
  });

  return (
    <div className="app-root">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        bookmarkedCount={bookmarkedIds.length}
        registeredCount={tickets.length}
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'my-tickets') setShowMyTicketsModal(true);
        }}
      />

      <main>
        {/* Hero Banner */}
        <Hero
          onExploreClick={() => {
            const evSection = document.getElementById('events');
            if (evSection) evSection.scrollIntoView({ behavior: 'smooth' });
          }}
          onRegisterClick={() => {
            const regSection = document.getElementById('register');
            if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Event Catalog Section */}
        <section id="events" className="container" style={{ padding: '3rem 1.5rem' }}>
          <div className="section-header">
            <span className="section-tag">
              {activeTab === 'bookmarks' ? 'Your Saved Items' : 'Discover Opportunities'}
            </span>
            <h2 className="section-title">
              {activeTab === 'bookmarks' ? 'Bookmarked Technical Events' : 'Explore All Technical Events'}
            </h2>
          </div>

          <EventFilter
            categories={categoriesList}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
            searchQuery={searchQuery}
            onSearchChange={(q) => setSearchQuery(q)}
            onResetFilters={handleResetFilters}
            totalMatching={filteredEvents.length}
          />

          {filteredEvents.length > 0 ? (
            <div className="events-grid">
              {filteredEvents.map(evt => (
                <EventCard
                  key={evt.id}
                  event={evt}
                  isBookmarked={bookmarkedIds.includes(evt.id)}
                  onToggleBookmark={handleToggleBookmark}
                  onViewDetails={(e) => setModalEvent(e)}
                  onRegisterClick={handleRegisterClick}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🔎</div>
              <h3>No matching events found</h3>
              <p>
                {activeTab === 'bookmarks'
                  ? "You haven't bookmarked any events yet. Click the heart icon on any event card to save it!"
                  : "We couldn't find any event matching your search query or selected category."}
              </p>
              <button className="btn-primary" onClick={handleResetFilters}>
                View All Events
              </button>
            </div>
          )}
        </section>

        {/* Registration Section */}
        <RegistrationForm
          events={initialEvents}
          selectedEventId={registrationEventId}
          onSubmitRegistration={handleFormSubmission}
        />
      </main>

      {/* Event Details Popup Modal */}
      {modalEvent && (
        <EventModal
          event={modalEvent}
          onClose={() => setModalEvent(null)}
          onRegisterNow={(id) => handleRegisterClick(id)}
        />
      )}

      {/* Ticket Success Confirmation Modal */}
      {activeTicket && (
        <TicketModal
          ticket={activeTicket}
          onClose={() => setActiveTicket(null)}
        />
      )}

      {/* My Passes / Registrations Drawer Modal */}
      {showMyTicketsModal && (
        <div className="modal-overlay" onClick={() => setShowMyTicketsModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '650px' }}>
            <button className="modal-close-btn" onClick={() => setShowMyTicketsModal(false)}>✕</button>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 800 }}>🎟️ Your Registered Passes</h2>

            {tickets.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '60vh', overflowY: 'auto' }}>
                {tickets.map((t, idx) => (
                  <div key={idx} style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.1rem' }}>{t.eventName}</h4>
                      <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', background: 'var(--bg-card)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                        {t.ticketId}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      Registered to: <strong>{t.fullName}</strong> ({t.email}) • {t.college}
                    </p>
                  </div>
                ))}
                <button 
                  className="btn-secondary" 
                  style={{ marginTop: '0.5rem', color: 'var(--accent-rose)' }}
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear stored registrations?')) {
                      setTickets([]);
                      setShowMyTicketsModal(false);
                    }
                  }}
                >
                  🗑️ Clear All Registrations
                </button>
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)' }}>You haven't registered for any events yet.</p>
            )}
          </div>
        </div>
      )}

      <Footer onCategorySelect={(cat) => {
        setSelectedCategory(cat);
        const evSection = document.getElementById('events');
        if (evSection) evSection.scrollIntoView({ behavior: 'smooth' });
      }} />
    </div>
  );
}
