import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('YOUR_LOGIN_ENDPOINT_HERE', {
        email,
        password
      });

      // Assume the response contains a token or user object
      console.log('Login success:', response.data);

      // You can store token here if needed
      // localStorage.setItem('token', response.data.token);

      // Navigate to home or dashboard
      navigate('/create');
    } catch (error) {
      alert('Login failed');
      console.error('Login error:', error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login to Coachify</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br/><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br/><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
