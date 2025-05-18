// src/pages/AdminLogin.jsx
import React from "react";

const AdminLogin = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin Login</h2>
      <form
        style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
      >
        <label>Email:</label>
        <input type="email" placeholder="admin@example.com" />
        <label>Password:</label>
        <input type="password" placeholder="********" />
        <button
          type="submit"
          style={{
            marginTop: "1rem",
            backgroundColor: "#6a0dad",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
