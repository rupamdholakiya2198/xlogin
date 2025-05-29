import React, { useState } from 'react';

function XLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label><br />
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label htmlFor="password">Password</label><br />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <button type="submit" disabled={!username || !password}>
            Submit
          </button>
        </div>
      </form>

      {submitted && (
        <div style={{ marginTop: '15px' }}>
          <strong>{message}</strong>
        </div>
      )}
    </div>
  );
}

export default XLogin;
