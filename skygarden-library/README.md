# 🌿 SkyGarden Library - Hệ Thống Quản Lý Thư Viện Sách

Dự án React hoàn chỉnh theo yêu cầu đề thi Module 5, cấu trúc module hóa chuẩn, giao diện hiện đại và tính năng đầy đủ.

---

## 📁 Cấu Trúc Dự Án

```
skygarden-library/
├── db.json                       # Mock database (books, categories)
├── package.json                  # Cấu hình dự án & scripts
└── src/
    ├── main.jsx                  # Điểm khởi chạy React ứng dụng
    ├── App.jsx                   # Điều hướng Routes (Router, Header)
    ├── index.css                 # Toàn bộ Style hiện đại (Outfit, Inter)
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Header.jsx        # Thanh điều hướng trên cùng
    │   │   └── PageContainer.jsx # Khung bọc trang chuẩn UI
    │   ├── books/
    │   │   ├── BookTable.jsx     # Bảng danh sách sách
    │   │   ├── BookRow.jsx       # Từng dòng sách (format ngày, badge số lượng)
    │   │   ├── BookSearch.jsx    # Ô tìm kiếm gần đúng theo tên
    │   │   ├── BookFilter.jsx    # Dropdown lọc theo thể loại từ db.json
    │   │   ├── BookActions.jsx   # Nút điều hướng thêm sách & đặt lại bộ lọc
    │   │   └── EmptyBookList.jsx # Thông báo khi không tìm thấy kết quả
    │   └── forms/
    │       ├── BookForm.jsx      # Quản lý form và điều phối validation
    │       ├── BookIdField.jsx   # Ô nhập mã sách BO-XXXX
    │       ├── BookNameField.jsx # Ô nhập tên sách (<= 100 ký tự)
    │       ├── BookCategoryField.jsx # Dropdown chọn thể loại
    │       ├── BookDateField.jsx # Chọn ngày nhập (<= ngày hiện tại)
    │       ├── BookQuantityField.jsx # Nhập số lượng (số nguyên > 0)
    │       └── FormActions.jsx   # Nút Hủy và Thêm sách mới
    │
    ├── pages/
    │   ├── BookList.jsx          # Trang danh sách, lọc, tìm kiếm
    │   └── BookAdd.jsx           # Trang thêm mới sách kèm thông báo thành công
    │
    ├── services/
    │   ├── api.js                # Cấu hình Axios client
    │   ├── bookService.js        # API CRUD sách với json-server & fallback
    │   └── categoryService.js    # API lấy danh sách thể loại từ db.json
    │
    └── utils/
        ├── validators.js         # Hàm kiểm tra hợp lệ toàn bộ form
        ├── dateUtils.js          # Chuyển đổi định dạng dd/MM/yyyy & kiểm tra ngày
        └── bookUtils.js          # Sắp xếp giảm dần số lượng, lọc kết hợp
```

---

## 🚀 Hướng Dẫn Chạy Ứng Dụng

### 1. Cài đặt các gói phụ thuộc (nếu chưa cài):
```bash
npm install
```

### 2. Chạy đồng thời cả Frontend (Vite) và Mock API (JSON-Server):
```bash
npm start
```
- **Giao diện Web**: [http://localhost:5173](http://localhost:5173)
- **JSON-Server**: [http://localhost:3001](http://localhost:3001)

### 3. Hoặc chạy riêng biệt từng server:
```bash
# Chạy json-server độc lập:
npm run server

# Chạy vite server độc lập:
npm run dev
```


