import React from 'react';

import classes from './JobCard.module.css';
import { SelectionStatus } from '../SelectionStatus';

const JobCard = ({
  companyName,
  jobProfile,
  salary,
  location,
  description,
  status,
  className,
  ...props
}) => (
  <section className={`${classes.jobCard} ${className}`} {...props}>
    <main>
      <h1>{companyName}</h1>
      <h4>{jobProfile}</h4>
    </main>
    <aside>
      <p>{salary}</p>
      <p>{location}</p>
    </aside>
    <p>{description}</p>
    <span className={classes.tags}>
      <SelectionStatus className={classes.antTag} status={status} />
    </span>
  </section>
);

export { JobCard };
