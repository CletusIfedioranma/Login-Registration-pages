import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <>
      <h2>Welcome to your dashboard</h2>
      <Link to='/' className='back-link'>
        Back to Home
      </Link>
    </>
  );
};
export default DashboardPage;
