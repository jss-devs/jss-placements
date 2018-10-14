import React from 'react';
import { Tag } from 'antd';
import classes from './JobCard.module.css';

const JobCard = ({
  companyName,
  post,
  salary,
  city,
  content,
  className,
  ...props
}) => (
  <section className={`${classes.jobCard} ${className}`} {...props}>
    <main>
      <h1>{companyName}</h1>
      <h4>{post}</h4>
    </main>
    <aside>
      <p>{salary}</p>
      <p>{city}</p>
    </aside>
    <p>{content}</p>
    <span className={classes.tags}>
      <Tag className={classes.antTag} color="#28a745">
        Shortlisted
      </Tag>
    </span>
  </section>
);

export { JobCard };
