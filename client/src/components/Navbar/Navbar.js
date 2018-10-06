import React from 'react';
import { Link } from "react-router-dom";

import classes from './Navbar.module.css';

const Navbar = () => (
  <nav className={classes.navbar}>
    <h1 className={classes.title}>
      JSS Placements
    </h1>
    <Link to="/" className={classes.navlink}>Home</Link>
  </nav>
)

export { Navbar }
