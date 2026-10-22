import React from 'react';
import { AlertCircle } from 'lucide-react';
import { getTodayISODate } from '../../utils/dateUtils';

/**
 * Requirement: Ngày nhập sách không được lớn hơn ngày hiện tại (2 điểm)
 */
const BookDateField = ({ value, onChange, error }) => {
  const maxDate = getTodayISODate();

  return (
    <div className="form-group">
      <label htmlFor="book-date-input" className="form-label">
        Ngày nhập sách <span className="required">*</span>
      </label>
      <input
        type="date"
        id="book-date-input"
        className={`form-control ${error ? 'has-error' : ''}`}
        max={maxDate}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="form-hint">Ngày nhập sách không được vượt quá ngày hôm nay</div>
      {error && (
        <div className="form-error">
          <AlertCircle size={15} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default BookDateField;
