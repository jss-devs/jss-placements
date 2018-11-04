import React from 'react';

import classes from './JobCard.module.css';
import { SelectionStatus } from '../SelectionStatus';
<<<<<<< HEAD
=======

>>>>>>> 64a2410037f8bf08d639cec3fc6c5ab9f37caa11
const JobCard = ({
  companyName,
  jobProfile,
  salary,
  location,
  description,
  status,
  className,
  status,
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
<<<<<<< HEAD
      <SelectionStatus className={classes.antTag} status={status}/>
=======
      <SelectionStatus className={classes.antTag} status={status} />
>>>>>>> 64a2410037f8bf08d639cec3fc6c5ab9f37caa11
    </span>
  </section>
);

export { JobCard };
