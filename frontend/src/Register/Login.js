// Login component

import React, { useState } from 'react';

const Login = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        // Redirect to home page upon successful login
        window.location.href = '/home';
      } else {
        console.error('Login failed:', response.statusText);
        // Handle error responses from the server
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle network errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <p>NAME:<input type="text" name="name" value={userData.name} onChange={handleChange} /></p>  
      <input type="email" name="email" value={userData.email} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
