import { isDateInPastOrToday } from './dateUtils';

/**
 * Regex for Book ID format: BO - XXXX or BO-XXXX where X is a digit
 * Matches: 'BO-0001', 'BO - 0001', 'bo-1234'
 */
export const BOOK_ID_REGEX = /^BO\s*-\s*\d{4}$/i;

/**
 * Validate book ID format
 * @param {string} id
 * @returns {string|null} Error message or null
 */
export const validateBookId = (id, existingIds = []) => {
  if (!id || !id.trim()) {
    return 'Mã sách không được để trống';
  }

  const normalizedId = id.trim().toUpperCase().replace(/\s+/g, '');
  if (!BOOK_ID_REGEX.test(id.trim())) {
    return 'Mã sách phải có định dạng BO-XXXX (với X là các chữ số, ví dụ: BO-0001)';
  }

  // Check duplicate
  const isDuplicate = existingIds.some(
    (existing) => existing.toUpperCase().replace(/\s+/g, '') === normalizedId
  );
  if (isDuplicate) {
    return 'Mã sách này đã tồn tại trong hệ thống';
  }

  return null;
};

/**
 * Validate book name
 * @param {string} name
 * @returns {string|null} Error message or null
 */
export const validateBookName = (name) => {
  if (!name || !name.trim()) {
    return 'Tên sách không được để trống';
  }

  if (name.trim().length > 100) {
    return 'Tên sách không được dài quá 100 ký tự';
  }

  return null;
};

/**
 * Validate book category
 * @param {string|number} categoryId
 * @returns {string|null} Error message or null
 */
export const validateBookCategory = (categoryId) => {
  if (!categoryId || String(categoryId).trim() === '') {
    return 'Vui lòng chọn thể loại sách từ danh sách';
  }
  return null;
};

/**
 * Validate book import date
 * @param {string} importDate
 * @returns {string|null} Error message or null
 */
export const validateBookDate = (importDate) => {
  if (!importDate) {
    return 'Ngày nhập sách không được để trống';
  }

  if (!isDateInPastOrToday(importDate)) {
    return 'Ngày nhập sách không được lớn hơn ngày hiện tại';
  }

  return null;
};

/**
 * Validate book quantity
 * @param {string|number} quantity
 * @returns {string|null} Error message or null
 */
export const validateBookQuantity = (quantity) => {
  if (quantity === '' || quantity === null || quantity === undefined) {
    return 'Số lượng sách không được để trống';
  }

  const num = Number(quantity);
  if (!Number.isInteger(num) || num <= 0) {
    return 'Số lượng sách phải là số nguyên lớn hơn 0';
  }

  return null;
};

/**
 * Validate entire book form
 * @param {object} formData
 * @param {string[]} existingIds
 * @returns {{ isValid: boolean, errors: object }}
 */
export const validateBookForm = (formData, existingIds = []) => {
  const errors = {};

  const idError = validateBookId(formData.id, existingIds);
  if (idError) errors.id = idError;

  const nameError = validateBookName(formData.name);
  if (nameError) errors.name = nameError;

  const categoryError = validateBookCategory(formData.categoryId);
  if (categoryError) errors.categoryId = categoryError;

  const dateError = validateBookDate(formData.importDate);
  if (dateError) errors.importDate = dateError;

  const quantityError = validateBookQuantity(formData.quantity);
  if (quantityError) errors.quantity = quantityError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
