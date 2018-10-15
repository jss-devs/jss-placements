import React from 'react';
import { Tag } from 'antd';
import classes from './JobCard.module.css';
import { SelectionStatus } from '../SelectionStatus';
const JobCard = ({
  companyName,
  post,
  salary,
  city,
  content,
  className,
  status,
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
      <SelectionStatus className={classes.antTag} status={status}/>
    </span>
  </section>
);

export { JobCard };
