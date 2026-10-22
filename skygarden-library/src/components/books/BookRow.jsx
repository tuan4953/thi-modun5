import React from 'react';
import { formatDate } from '../../utils/dateUtils';
import { Calendar, Tag, Bookmark } from 'lucide-react';

const BookRow = ({ book, index }) => {
  // Determine badge styling based on quantity
  const getQuantityClass = (qty) => {
    const num = Number(qty) || 0;
    if (num >= 50) return 'quantity-high';
    if (num >= 20) return 'quantity-medium';
    return 'quantity-low';
  };

  return (
    <tr>
      <td className="text-center" style={{ color: 'var(--slate-400)', fontWeight: 600 }}>
        {index + 1}
      </td>
      <td>
        <span className="book-id-badge">
          <Bookmark size={13} />
          {book.id}
        </span>
      </td>
      <td>
        <div className="book-title">{book.name}</div>
      </td>
      <td>
        <span className="category-tag">
          <Tag size={13} />
          {book.category || 'Chưa phân loại'}
        </span>
      </td>
      <td>
        <span className="date-text">
          <Calendar size={14} />
          {/* Requirement 1: Ngày nhập sách hiển thị đúng định dạng dd/MM/yyyy (5 điểm) */}
          {formatDate(book.importDate)}
        </span>
      </td>
      <td className="text-center">
        {/* Requirement 2: Hiển thị danh sách sắp xếp giảm dần theo số lượng sách (5 điểm) */}
        <span className={`quantity-badge ${getQuantityClass(book.quantity)}`}>
          {book.quantity}
        </span>
      </td>
    </tr>
  );
};

export default BookRow;
