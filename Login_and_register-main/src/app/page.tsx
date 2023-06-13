'use client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from '@/component/LoginPage';
import RegisterPage from '@/component/RegisterPage';
import DashboardPage from '@/component/DashboardPage';

const Home: React.FC = () => {
  return (
    <Router>
      <div className='container'>
        <h2>Welcome to the Cletus Forms</h2>
        <nav>
          <ul>
            <li>
              <Link to='/login' className='link'>
                Login
              </Link>
            </li>
            <li>
              <Link to='/register' className='link'>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default Home;
