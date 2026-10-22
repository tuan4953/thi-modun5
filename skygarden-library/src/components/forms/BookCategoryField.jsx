import React from 'react';
import { AlertCircle, ChevronDown } from 'lucide-react';

/**
 * Requirement: Thể loại được chọn từ dropdown list (danh sách lấy từ file db.json) (2 điểm)
 */
const BookCategoryField = ({ categories = [], value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor="book-category-select" className="form-label">
        Thể loại <span className="required">*</span>
      </label>
      <div className="input-with-icon">
        <select
          id="book-category-select"
          className={`form-control ${error ? 'has-error' : ''}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ paddingRight: '2.5rem', cursor: 'pointer' }}
        >
          <option value="">-- Chọn thể loại sách --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <span className="select-arrow" style={{ right: '0.85rem' }}>
          <ChevronDown size={16} />
        </span>
      </div>
      {error && (
        <div className="form-error">
          <AlertCircle size={15} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default BookCategoryField;
