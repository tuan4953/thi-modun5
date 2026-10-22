/**
 * Sort books descending by quantity
 * Requirement: Hiển thị danh sách sắp xếp giảm dần theo số lượng sách (5 điểm)
 * @param {Array} books
 * @returns {Array} Sorted books array
 */
export const sortBooksByQuantityDesc = (books) => {
  if (!Array.isArray(books)) return [];
  return [...books].sort((a, b) => {
    const qtyA = Number(a.quantity) || 0;
    const qtyB = Number(b.quantity) || 0;
    return qtyB - qtyA;
  });
};

/**
 * Filter books by title (approximate/case-insensitive) and/or category
 * Requirement 3: Tìm kiếm gần đúng theo tên sách (10 điểm)
 * Requirement 4: Tìm kiếm sách theo thể loại (được chọn từ dropdown list) (5 điểm)
 * Requirement 5: Tìm kiếm kết hợp cả 2 thông tin trên (5 điểm)
 * 
 * @param {Array} books
 * @param {string} searchTerm
 * @param {string} categoryFilter
 * @returns {Array} Filtered books
 */
export const filterBooks = (books, searchTerm = '', categoryFilter = '') => {
  if (!Array.isArray(books)) return [];

  const trimmedSearch = (searchTerm || '').trim().toLowerCase();
  const selectedCategory = (categoryFilter || '').trim();

  return books.filter((book) => {
    // Check approximate name match (case-insensitive substring)
    const matchesName = trimmedSearch === '' || 
      (book.name && book.name.toLowerCase().includes(trimmedSearch));

    // Check category match: match categoryId or category name
    const matchesCategory = selectedCategory === '' ||
      String(book.categoryId) === selectedCategory ||
      book.category === selectedCategory;

    // Both criteria must match (combined search)
    return matchesName && matchesCategory;
  });
};

/**
 * Standardize book ID format (e.g. "BO - 0001" -> "BO-0001")
 * @param {string} id
 * @returns {string} Normalized uppercase ID
 */
export const normalizeBookId = (id) => {
  if (!id) return '';
  return id.trim().toUpperCase().replace(/\s*-\s*/, '-');
};
