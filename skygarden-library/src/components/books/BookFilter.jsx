import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';

/**
 * Requirement 4: Tìm kiếm sách theo thể loại (được chọn từ dropdown list) (5 điểm)
 */
const BookFilter = ({ categories = [], selectedCategory = '', onChange }) => {
  return (
    <div className="input-with-icon" style={{ minWidth: '220px' }}>
      <span className="input-icon">
        <Filter size={18} />
      </span>
      <select
        id="book-category-filter"
        className="select-control"
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">-- Tất cả thể loại --</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <span className="select-arrow">
        <ChevronDown size={16} />
      </span>
    </div>
  );
};

export default BookFilter;
