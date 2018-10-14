import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => (
  <div>
    <h1>Home</h1>
    <Link to="/auth/login">Login</Link>
    <Link to="/management/placements">Management</Link>
    <Link to="/student/notices">Student</Link>
  </div>
);

export { Signup };
