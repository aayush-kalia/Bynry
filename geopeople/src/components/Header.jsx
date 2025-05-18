// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">GeoPeople</h1>
      <nav>
        <Link to="/admin" className="admin-link">
          Admin Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
