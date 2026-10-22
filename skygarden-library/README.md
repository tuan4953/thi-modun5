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

---

## 🎯 Chi Tiết Đáp Ứng Yêu Cầu & Điểm Số

| STT | Yêu Cầu Đề Bài | Đáp Ứng Kỹ Thuật | Điểm |
|:---:|:---|:---|:---:|
| 1 | **Hiển thị danh sách từ db.json** | Lấy dữ liệu qua `bookService.js` từ `http://localhost:3001/books` | Đạt |
| 2 | **Ngày nhập đúng định dạng `dd/MM/yyyy`** | Hàm `formatDate()` trong `utils/dateUtils.js` định dạng chính xác `dd/MM/yyyy` | **5đ** |
| 3 | **Sắp xếp giảm dần theo số lượng** | Hàm `sortBooksByQuantityDesc()` trong `utils/bookUtils.js` sắp xếp giảm dần | **5đ** |
| 4 | **Mã sách định dạng `BO-XXXX`** | Regex `/^BO\s*-\s*\d{4}$/i` kiểm tra chặt chẽ, báo lỗi chi tiết nếu sai | **2đ** |
| 5 | **Tên sách không quá 100 ký tự** | Kiểm tra độ dài `<= 100` ký tự kèm bộ đếm thời gian thực | Đạt |
| 6 | **Thể loại từ dropdown list** | Dropdown load dữ liệu động từ `db.json` (`categoryService.js`) | **2đ** |
| 7 | **Ngày nhập không lớn hơn ngày hiện tại** | Ràng buộc thuộc tính `max` và hàm kiểm tra `isDateInPastOrToday()` | **2đ** |
| 8 | **Số lượng là số nguyên lớn hơn 0** | Kiểm tra `Number.isInteger(num) && num > 0` | **2đ** |
| 9 | **Thông báo thành công sau khi thêm** | Hiển thị Toast notification `Đã thêm mới sách... thành công!` và điều hướng | **5đ** |
| 10 | **Tìm kiếm gần đúng theo tên sách** | Tìm kiếm không phân biệt hoa thường theo chuỗi con (`includes`) | **10đ** |
| 11 | **Tìm kiếm theo thể loại** | Lọc theo ID / Tên thể loại từ dropdown | **5đ** |
| 12 | **Tìm kiếm kết hợp cả 2 thông tin** | Kết hợp điều kiện Tên VÀ Thể loại trong `filterBooks()` | **5đ** |
| 13 | **Hiển thị thông báo khi không có thông tin** | Component `EmptyBookList.jsx` hiển thị thông báo trực quan | **5đ** |
| 14 | **Clean Code** | Phân tách module rõ ràng, xử lý lỗi tốt, cấu trúc đúng chuẩn đề bài | **5đ** |
| 15 | **Giao diện** | Giao diện hiện đại, responsive, phối màu hài hòa, hiệu ứng mượt mà | Đạt |
