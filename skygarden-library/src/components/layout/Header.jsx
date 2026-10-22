import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, ListFilter, PlusCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-content">
        <NavLink to="/" className="header-brand">
          <div className="header-logo-icon">
            <BookOpen size={24} />
          </div>
          <div>
            <div className="header-brand-title">SkyGarden Library</div>
            <div className="header-brand-tagline">Hệ thống quản lý thư viện sách</div>
          </div>
        </NavLink>

        <nav className="header-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `header-nav-link ${isActive ? 'active' : ''}`
            }
          >
            <ListFilter size={18} />
            <span>Danh sách sách</span>
          </NavLink>

          <NavLink
            to="/add"
            className={({ isActive }) =>
              `header-nav-link ${isActive ? 'active' : ''}`
            }
          >
            <PlusCircle size={18} />
            <span>Thêm mới sách</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
