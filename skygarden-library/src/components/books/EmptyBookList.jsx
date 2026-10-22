import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

/**
 * Requirement 6: Tìm kiếm không có thông tin hiển thị thông báo cho người dùng (5 điểm)
 */
const EmptyBookList = ({ isFiltered = false, onReset }) => {
  return (
    <div className="empty-state" id="empty-book-list-message">
      <div className="empty-icon-wrapper">
        <SearchX size={36} />
      </div>
      <h3 className="empty-title">
        {isFiltered
          ? 'Không tìm thấy kết quả phù hợp'
          : 'Chưa có cuốn sách nào trong thư viện'}
      </h3>
      <p className="empty-description">
        {isFiltered
          ? 'Không tìm thấy cuốn sách nào khớp với từ khóa tìm kiếm hoặc thể loại bạn đã chọn. Vui lòng thử lại với từ khóa khác.'
          : 'Hiện tại hệ thống thư viện chưa có dữ liệu sách. Bạn có thể bắt đầu bằng cách thêm sách mới.'}
      </p>
      {isFiltered && onReset && (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onReset}
          id="btn-empty-reset"
        >
          <RotateCcw size={16} />
          <span>Xóa bộ lọc & xem tất cả</span>
        </button>
      )}
    </div>
  );
};

export default EmptyBookList;
