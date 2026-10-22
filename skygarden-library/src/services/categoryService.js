import apiClient from './api';

const DEFAULT_CATEGORIES = [
  { id: '1', name: 'Công nghệ thông tin' },
  { id: '2', name: 'Kinh tế - Kinh doanh' },
  { id: '3', name: 'Khoa học - Tự nhiên' },
  { id: '4', name: 'Văn học - Nghệ thuật' },
  { id: '5', name: 'Kỹ năng sống' },
];

/**
 * Fetch all categories from API
 * @returns {Promise<Array>} List of categories
 */
export const getAllCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    return response.data;
  } catch (error) {
    console.warn('API error fetching categories, using fallback local categories:', error.message);
    return DEFAULT_CATEGORIES;
  }
};
