import React from 'react';
import BookRow from './BookRow';
import { ArrowDownNarrowWide } from 'lucide-react';

const BookTable = ({ books }) => {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th className="text-center" style={{ width: '60px' }}>STT</th>
            <th style={{ width: '130px' }}>Mã sách</th>
            <th>Tên sách</th>
            <th style={{ width: '220px' }}>Thể loại</th>
            <th style={{ width: '160px' }}>Ngày nhập</th>
            <th className="text-center" style={{ width: '140px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Số lượng
                <ArrowDownNarrowWide size={15} title="Sắp xếp giảm dần theo số lượng" style={{ color: 'var(--primary-600)' }} />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <BookRow
              key={book.id || index}
              book={book}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
