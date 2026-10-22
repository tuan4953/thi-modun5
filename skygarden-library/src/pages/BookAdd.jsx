import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import BookForm from '../components/forms/BookForm';
import { getAllCategories } from '../services/categoryService';
import { getAllBooks, createBook } from '../services/bookService';
import { CheckCircle2, X } from 'lucide-react';

const BookAdd = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [existingBookIds, setExistingBookIds] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadFormData = async () => {
      try {
        const [categoriesData, booksData] = await Promise.all([
          getAllCategories(),
          getAllBooks(),
        ]);
        if (isMounted) {
          setCategories(categoriesData);
          setExistingBookIds(booksData.map((b) => b.id));
        }
      } catch (error) {
        console.error('Error loading form data:', error);
      }
    };

    loadFormData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async (bookData) => {
    try {
      setIsSubmitting(true);
      await createBook(bookData);

      // Requirement: Thông báo thành công sau khi thêm mới (5 điểm)
      setToastMessage(`Đã thêm mới sách "${bookData.name}" (${bookData.id}) thành công!`);
      setShowToast(true);

      // Navigate back to list after showing success notification
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Có lỗi xảy ra khi thêm sách mới, vui lòng thử lại!');
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <PageContainer
      title="Thêm Mới Sách Vào Thư Viện"
      subtitle="Điền đầy đủ thông tin bên dưới để nhập sách mới vào hệ thống"
    >
      <BookForm
        categories={categories}
        existingBookIds={existingBookIds}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        isSubmitting={isSubmitting}
      />

      {/* Requirement: Thông báo thành công sau khi thêm mới (5 điểm) */}
      {showToast && (
        <div className="toast-container" id="success-toast">
          <div className="toast toast-success">
            <span className="toast-icon">
              <CheckCircle2 size={24} />
            </span>
            <div className="toast-message">{toastMessage}</div>
            <button
              type="button"
              className="toast-close"
              onClick={() => setShowToast(false)}
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default BookAdd;
