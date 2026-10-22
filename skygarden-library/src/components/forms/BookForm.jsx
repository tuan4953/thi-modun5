import React, { useState } from 'react';
import BookIdField from './BookIdField';
import BookNameField from './BookNameField';
import BookCategoryField from './BookCategoryField';
import BookDateField from './BookDateField';
import BookQuantityField from './BookQuantityField';
import FormActions from './FormActions';
import { validateBookForm } from '../../utils/validators';
import { normalizeBookId } from '../../utils/bookUtils';

const BookForm = ({
  categories = [],
  existingBookIds = [],
  onSubmit,
  onCancel,
  isSubmitting = false,
}) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    categoryId: '',
    importDate: '',
    quantity: '',
  });

  const [errors, setErrors] = useState({});

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear field-specific error as user types
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationResult = validateBookForm(formData, existingBookIds);

    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      return;
    }

    // Find the category name corresponding to the selected categoryId
    const selectedCat = categories.find((c) => String(c.id) === String(formData.categoryId));

    const preparedData = {
      id: normalizeBookId(formData.id),
      name: formData.name.trim(),
      categoryId: String(formData.categoryId),
      category: selectedCat ? selectedCat.name : '',
      importDate: formData.importDate,
      quantity: Number(formData.quantity),
    };

    onSubmit(preparedData);
  };

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <BookIdField
        value={formData.id}
        onChange={(val) => handleFieldChange('id', val)}
        error={errors.id}
      />

      <BookNameField
        value={formData.name}
        onChange={(val) => handleFieldChange('name', val)}
        error={errors.name}
      />

      <BookCategoryField
        categories={categories}
        value={formData.categoryId}
        onChange={(val) => handleFieldChange('categoryId', val)}
        error={errors.categoryId}
      />

      <BookDateField
        value={formData.importDate}
        onChange={(val) => handleFieldChange('importDate', val)}
        error={errors.importDate}
      />

      <BookQuantityField
        value={formData.quantity}
        onChange={(val) => handleFieldChange('quantity', val)}
        error={errors.quantity}
      />

      <FormActions isSubmitting={isSubmitting} onCancel={onCancel} />
    </form>
  );
};

export default BookForm;
