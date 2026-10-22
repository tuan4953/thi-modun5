import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, RotateCcw } from 'lucide-react';

const BookActions = ({ hasActiveFilter, onResetFilters }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
      {hasActiveFilter && (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onResetFilters}
          title="Đặt lại bộ lọc tìm kiếm"
        >
          <RotateCcw size={16} />
          <span>Đặt lại</span>
        </button>
      )}

      <Link to="/add" className="btn btn-primary" id="btn-add-new-book">
        <Plus size={18} />
        <span>Thêm sách mới</span>
      </Link>
    </div>
  );
};

export default BookActions;
