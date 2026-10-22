import React from 'react';
import { Search, X } from 'lucide-react';

/**
 * Requirement 3: Tìm kiếm gần đúng theo tên sách (10 điểm)
 */
const BookSearch = ({ value, onChange, onClear }) => {
  return (
    <div className="input-with-icon">
      <span className="input-icon">
        <Search size={18} />
      </span>
      <input
        type="text"
        id="book-search-input"
        className="input-control"
        placeholder="Tìm kiếm theo tên sách..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          type="button"
          className="input-clear-btn"
          onClick={onClear}
          title="Xóa tìm kiếm"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default BookSearch;
