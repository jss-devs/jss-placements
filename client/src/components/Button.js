import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const SignupButton = props => (
  <Link to="/auth/signup" {...props}>
    <Button type="primary" size="large" block>
      Signup
    </Button>
  </Link>
);

const LoginButton = props => (
  <Link to="/auth/login" {...props}>
    <Button size="large" block>
      Login
    </Button>
  </Link>
);

export { SignupButton, LoginButton };
