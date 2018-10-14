import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div>
    <h1>Home</h1>
    <Link to="/auth/signup">Signup</Link>
    <Link to="/management/placements">Management</Link>
    <Link to="/student/notices">Student</Link>
  </div>
);

export { Login };
