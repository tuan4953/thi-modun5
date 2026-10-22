import React from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * Requirement: Số lượng sách phải là số nguyên lớn hơn 0 (2 điểm)
 */
const BookQuantityField = ({ value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor="book-quantity-input" className="form-label">
        Số lượng sách <span className="required">*</span>
      </label>
      <input
        type="number"
        id="book-quantity-input"
        className={`form-control ${error ? 'has-error' : ''}`}
        placeholder="Ví dụ: 10"
        min="1"
        step="1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="form-hint">Số lượng sách phải là một số nguyên dương (&gt; 0)</div>
      {error && (
        <div className="form-error">
          <AlertCircle size={15} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default BookQuantityField;
