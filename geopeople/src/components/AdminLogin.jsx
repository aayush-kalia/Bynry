import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic hardcoded validation
    if (username === "admin" && password === "admin123") {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin Login</h2>
      <div
        style={{
          background: "#f0f0f0",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
        }}
      >
        <strong>Login Credentials:</strong>
        <p>
          Username: <code>admin</code>
        </p>
        <p>
          Password: <code>admin123</code>
        </p>
      </div>
      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px",
            border: "none",
            backgroundColor: "#6a0dad",
            color: "#ffffff",
            borderRadius: "6px",
          }}
        >
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
