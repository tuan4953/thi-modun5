import React from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * Requirement: Tên sách không dài quá 100 ký tự
 */
const BookNameField = ({ value, onChange, error }) => {
  const currentLength = (value || '').length;

  return (
    <div className="form-group">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label htmlFor="book-name-input" className="form-label">
          Tên sách <span className="required">*</span>
        </label>
        <span
          style={{
            fontSize: '0.785rem',
            color: currentLength > 100 ? 'var(--danger-500)' : 'var(--slate-400)',
            fontWeight: 500,
          }}
        >
          {currentLength}/100 ký tự
        </span>
      </div>
      <input
        type="text"
        id="book-name-input"
        className={`form-control ${error ? 'has-error' : ''}`}
        placeholder="Nhập tên cuốn sách..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && (
        <div className="form-error">
          <AlertCircle size={15} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default BookNameField;
