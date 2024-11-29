import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login Successful");
        localStorage.setItem("token", data.token); // Save token
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Admin Login</h2>
        
        {/* Username Field */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
        >
          Login
        </button>
        
        {/* Error/Success Message */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Need an account?{" "}
          <a href="/register" className="text-blue-500 hover:text-blue-600">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
