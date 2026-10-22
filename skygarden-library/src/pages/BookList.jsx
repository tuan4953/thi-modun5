import React, { useState, useEffect, useMemo } from 'react';
import PageContainer from '../components/layout/PageContainer';
import BookSearch from '../components/books/BookSearch';
import BookFilter from '../components/books/BookFilter';
import BookActions from '../components/books/BookActions';
import BookTable from '../components/books/BookTable';
import EmptyBookList from '../components/books/EmptyBookList';
import { getAllBooks } from '../services/bookService';
import { getAllCategories } from '../services/categoryService';
import { sortBooksByQuantityDesc, filterBooks } from '../utils/bookUtils';
import { BookOpenCheck, Loader2 } from 'lucide-react';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch books and categories on mount
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const [booksData, categoriesData] = await Promise.all([
          getAllBooks(),
          getAllCategories(),
        ]);
        if (isMounted) {
          setBooks(booksData);
          setCategories(categoriesData);
        }
      } catch (error) {
        console.error('Failed to load library data:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter books based on search term (name) AND category dropdown
  // Requirement 3: Tìm kiếm gần đúng theo tên sách (10đ)
  // Requirement 4: Tìm kiếm sách theo thể loại (5đ)
  // Requirement 5: Tìm kiếm kết hợp cả 2 thông tin trên (5đ)
  // Requirement 2: Hiển thị danh sách sắp xếp giảm dần theo số lượng sách (5đ)
  const filteredAndSortedBooks = useMemo(() => {
    const filtered = filterBooks(books, searchTerm, categoryFilter);
    return sortBooksByQuantityDesc(filtered);
  }, [books, searchTerm, categoryFilter]);

  const hasActiveFilter = searchTerm.trim() !== '' || categoryFilter !== '';

  const handleResetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('');
  };

  return (
    <PageContainer
      title="Danh Sách Sách Trong Thư Viện"
      subtitle="Quản lý toàn bộ danh mục tài liệu và sách trong SkyGarden Library"
      action={
        <BookActions
          hasActiveFilter={hasActiveFilter}
          onResetFilters={handleResetFilters}
        />
      }
    >
      {/* Controls Bar: Search + Filter */}
      <div className="controls-bar">
        <div className="filters-group">
          {/* Requirement 3: Tìm kiếm gần đúng theo tên */}
          <BookSearch
            value={searchTerm}
            onChange={setSearchTerm}
            onClear={() => setSearchTerm('')}
          />

          {/* Requirement 4: Tìm kiếm theo thể loại từ dropdown list */}
          <BookFilter
            categories={categories}
            selectedCategory={categoryFilter}
            onChange={setCategoryFilter}
          />
        </div>
      </div>

      {/* Results Summary Counter */}
      <div className="results-summary">
        <div>
          Tổng số sách hiển thị:{' '}
          <span className="results-count">{filteredAndSortedBooks.length}</span>
          {hasActiveFilter && ` / ${books.length} cuốn`}
        </div>
        <div className="results-badge">
          <BookOpenCheck size={14} />
          <span>Sắp xếp giảm dần theo số lượng</span>
        </div>
      </div>

      {/* Content: Loading / Empty State / Table */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--slate-500)' }}>
          <Loader2 size={32} className="animate-spin" style={{ margin: '0 auto 1rem' }} />
          <p>Đang tải danh sách sách...</p>
        </div>
      ) : filteredAndSortedBooks.length === 0 ? (
        // Requirement 6: Tìm kiếm không có thông tin hiển thị thông báo cho người dùng (5đ)
        <EmptyBookList
          isFiltered={hasActiveFilter}
          onReset={handleResetFilters}
        />
      ) : (
        // Requirement 1 & 2: Hiển thị danh sách sắp xếp giảm dần theo số lượng, ngày dd/MM/yyyy
        <BookTable books={filteredAndSortedBooks} />
      )}
    </PageContainer>
  );
};

export default BookList;
