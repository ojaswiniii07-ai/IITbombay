import React, { useState, useEffect } from 'react';

export default function RegistrationForm({ events, selectedEventId, onSubmitRegistration }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: '',
    eventId: selectedEventId || '',
    yearOfStudy: '2nd Year',
    tshirtSize: 'M'
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedEventId) {
      setFormData(prev => ({ ...prev, eventId: selectedEventId }));
      if (errors.eventId) {
        setErrors(prev => ({ ...prev, eventId: '' }));
      }
    }
  }, [selectedEventId]);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.college.trim()) {
      newErrors.college = 'College Name is required.';
    }

    if (!formData.eventId) {
      newErrors.eventId = 'Please select an event to register for.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const selectedEvt = events.find(ev => ev.id === formData.eventId);
      onSubmitRegistration({
        ...formData,
        eventName: selectedEvt ? selectedEvt.name : 'Technical Event',
        eventCategory: selectedEvt ? selectedEvt.category : 'General',
        eventDate: selectedEvt ? selectedEvt.date : '',
        ticketId: 'EVT-' + Math.floor(100000 + Math.random() * 900000)
      });

      // Clear form
      setFormData({
        fullName: '',
        email: '',
        college: '',
        eventId: '',
        yearOfStudy: '2nd Year',
        tshirtSize: 'M'
      });
      setErrors({});
    }
  };

  return (
    <section id="register" className="registration-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Secure Your Spot</span>
          <h2 className="section-title">Event Registration</h2>
        </div>

        <div className="registration-card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={`form-input ${errors.fullName ? 'invalid' : ''}`}
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <span className="error-text">⚠️ {errors.fullName}</span>}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? 'invalid' : ''}`}
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-text">⚠️ {errors.email}</span>}
              </div>

              {/* College Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="college">
                  College / Institute Name *
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  className={`form-input ${errors.college ? 'invalid' : ''}`}
                  placeholder="e.g. IIT Bombay / VJTI"
                  value={formData.college}
                  onChange={handleChange}
                />
                {errors.college && <span className="error-text">⚠️ {errors.college}</span>}
              </div>

              {/* Select Event */}
              <div className="form-group">
                <label className="form-label" htmlFor="eventId">
                  Select Event *
                </label>
                <select
                  id="eventId"
                  name="eventId"
                  className={`form-select ${errors.eventId ? 'invalid' : ''}`}
                  value={formData.eventId}
                  onChange={handleChange}
                >
                  <option value="">-- Choose an Event --</option>
                  {events.map((evt) => (
                    <option key={evt.id} value={evt.id}>
                      {evt.name} ({evt.category} - {evt.date})
                    </option>
                  ))}
                </select>
                {errors.eventId && <span className="error-text">⚠️ {errors.eventId}</span>}
              </div>

              {/* Year of Study */}
              <div className="form-group">
                <label className="form-label" htmlFor="yearOfStudy">
                  Year of Study
                </label>
                <select
                  id="yearOfStudy"
                  name="yearOfStudy"
                  className="form-select"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                >
                  <option value="1st Year">1st Year (Freshman)</option>
                  <option value="2nd Year">2nd Year (Sophomore)</option>
                  <option value="3rd Year">3rd Year (Junior)</option>
                  <option value="4th Year">4th Year (Senior)</option>
                  <option value="Postgraduate">Postgraduate (M.Tech/Ph.D.)</option>
                </select>
              </div>

              {/* T-Shirt Size */}
              <div className="form-group">
                <label className="form-label" htmlFor="tshirtSize">
                  T-Shirt Size (For Swag Kit)
                </label>
                <select
                  id="tshirtSize"
                  name="tshirtSize"
                  className="form-select"
                  value={formData.tshirtSize}
                  onChange={handleChange}
                >
                  <option value="S">Small (S)</option>
                  <option value="M">Medium (M)</option>
                  <option value="L">Large (L)</option>
                  <option value="XL">Extra Large (XL)</option>
                </select>
              </div>

              {/* Submit CTAs */}
              <div className="form-group full-width" style={{ marginTop: '1rem' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
                  🚀 Complete Registration & Generate Pass
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
