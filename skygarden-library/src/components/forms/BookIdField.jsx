import React from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * Requirement: Mã sách đúng định dạng BO – XXXX với X là các số (2 điểm)
 */
const BookIdField = ({ value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor="book-id-input" className="form-label">
        Mã sách <span className="required">*</span>
      </label>
      <input
        type="text"
        id="book-id-input"
        className={`form-control ${error ? 'has-error' : ''}`}
        placeholder="Ví dụ: BO-0001"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="form-hint">Định dạng chuẩn: BO-XXXX (trong đó X là 4 chữ số)</div>
      {error && (
        <div className="form-error">
          <AlertCircle size={15} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default BookIdField;
