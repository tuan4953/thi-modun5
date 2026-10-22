import apiClient from './api';

const DEFAULT_BOOKS = [
  {
    id: 'BO-0001',
    name: 'Lập trình ReactJS Thực Chiến',
    categoryId: '1',
    category: 'Công nghệ thông tin',
    importDate: '2024-03-15',
    quantity: 50,
  },
  {
    id: 'BO-0004',
    name: 'Kinh Tế Học Hài Hước',
    categoryId: '2',
    category: 'Kinh tế - Kinh doanh',
    importDate: '2024-04-05',
    quantity: 30,
  },
  {
    id: 'BO-0002',
    name: 'Đắc Nhân Tâm',
    categoryId: '5',
    category: 'Kỹ năng sống',
    importDate: '2024-01-20',
    quantity: 120,
  },
  {
    id: 'BO-0005',
    name: 'Vũ Trụ Trong Vỏ Hạt Dẻ',
    categoryId: '3',
    category: 'Khoa học - Tự nhiên',
    importDate: '2023-09-18',
    quantity: 15,
  },
  {
    id: 'BO-0003',
    name: 'Nhà Giả Kim',
    categoryId: '4',
    category: 'Văn học - Nghệ thuật',
    importDate: '2023-11-10',
    quantity: 85,
  },
  {
    id: 'BO-0006',
    name: 'Clean Code - Nghệ Thuật Viết Mã Sạch',
    categoryId: '1',
    category: 'Công nghệ thông tin',
    importDate: '2024-02-28',
    quantity: 95,
  },
];

const LOCAL_STORAGE_KEY = 'skygarden_books_data';

const getLocalBooks = () => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Error reading localStorage', e);
  }
  return DEFAULT_BOOKS;
};

const saveLocalBooks = (books) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  } catch (e) {
    console.error('Error saving to localStorage', e);
  }
};

/**
 * Fetch all books from json-server or localStorage fallback
 * @returns {Promise<Array>}
 */
export const getAllBooks = async () => {
  try {
    const response = await apiClient.get('/books');
    saveLocalBooks(response.data);
    return response.data;
  } catch (error) {
    console.warn('API error fetching books, using local cache:', error.message);
    return getLocalBooks();
  }
};

/**
 * Get book by ID
 * @param {string} id
 * @returns {Promise<object>}
 */
export const getBookById = async (id) => {
  try {
    const response = await apiClient.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.warn(`API error fetching book ${id}, searching local cache:`, error.message);
    const books = getLocalBooks();
    const found = books.find((b) => b.id === id);
    if (!found) throw new Error('Không tìm thấy sách');
    return found;
  }
};

/**
 * Create a new book
 * @param {object} bookData
 * @returns {Promise<object>}
 */
export const createBook = async (bookData) => {
  try {
    const response = await apiClient.post('/books', bookData);
    // Update local cache
    const current = getLocalBooks();
    saveLocalBooks([bookData, ...current]);
    return response.data;
  } catch (error) {
    console.warn('API error creating book, persisting to local storage:', error.message);
    const current = getLocalBooks();
    const updated = [bookData, ...current];
    saveLocalBooks(updated);
    return bookData;
  }
};

/**
 * Delete a book by ID
 * @param {string} id
 * @returns {Promise<void>}
 */
export const deleteBook = async (id) => {
  try {
    await apiClient.delete(`/books/${id}`);
  } catch (error) {
    console.warn('API error deleting book, removing from local storage:', error.message);
  }
  const current = getLocalBooks();
  saveLocalBooks(current.filter((b) => b.id !== id));
};
