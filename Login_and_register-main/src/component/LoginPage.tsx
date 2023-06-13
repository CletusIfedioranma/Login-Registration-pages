import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Check if the user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: { email: string; password: string }) =>
        u.email === email && u.password === password
    );

    if (user) {
      alert('Login Successful!');
      navigate('/dashboard'); //navigate to the dashboard
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='container'>
      <h2>Login Page</h2>
      <form>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='button' onClick={handleLogin}>
          Login
        </button>
      </form>
      <Link to='/' className='back-link'>
        Back to Home
      </Link>
    </div>
  );
};
export default LoginPage;
