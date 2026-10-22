import React from 'react';
import { Check, ArrowLeft, Loader2 } from 'lucide-react';

const FormActions = ({ isSubmitting = false, onCancel }) => {
  return (
    <div className="form-actions">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={onCancel}
        disabled={isSubmitting}
        id="btn-form-cancel"
      >
        <ArrowLeft size={16} />
        <span>Hủy bỏ</span>
      </button>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={isSubmitting}
        id="btn-form-submit"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>Đang lưu...</span>
          </>
        ) : (
          <>
            <Check size={18} />
            <span>Thêm sách mới</span>
          </>
        )}
      </button>
    </div>
  );
};

export default FormActions;
