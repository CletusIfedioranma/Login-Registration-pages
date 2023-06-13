import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegister = () => {
    // Check if the user already exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find(
      (u: { email: string }) => u.email === email
    );

    if (existingUser) {
      alert('User with this email already exists!');
    } else {
      // Save the new user to localStorage
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration Successful!');
      navigate('/dashboard'); //navigate to the dashboard
    }
  };

  return (
    <div className='container'>
      <h2>Register Page</h2>
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
        <button type='button' onClick={handleRegister}>
          Register
        </button>
      </form>
      <Link to='/' className='back-link'>
        Back to Home
      </Link>
    </div>
  );
};
export default RegisterPage;
