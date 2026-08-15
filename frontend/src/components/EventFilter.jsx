import React from 'react';

export default function EventFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onResetFilters,
  totalMatching
}) {
  return (
    <div className="filter-container">
      <div className="search-sort-row">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search events by title or keyword..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            id="event-search-input"
          />
        </div>

        {(searchQuery || selectedCategory !== 'All') && (
          <button className="btn-secondary" onClick={onResetFilters} style={{ whiteSpace: 'nowrap' }}>
            🔄 Reset Filters
          </button>
        )}
      </div>

      <div className="category-chips">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`chip ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
