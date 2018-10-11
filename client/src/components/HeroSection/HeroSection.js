import React from 'react';

import { SignupButton, LoginButton } from '../Button';
import classes from './HeroSection.module.css';

console.log(classes);

const HeroSection = () => (
  <section className={classes.heroSection}>
    <main className={classes.content}>
      <h1 className={classes.heading}>A fully automated platform</h1>
      <p className={classes.subtitle}>for management and students</p>
    </main>
    <nav className={classes.action}>
      <SignupButton className={classes.signupButton} />
      <LoginButton className={classes.loginButton} />
    </nav>
  </section>
);

export { HeroSection };
