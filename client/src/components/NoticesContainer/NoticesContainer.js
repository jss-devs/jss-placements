import React from 'react';

import classes from './NoticesContainer.module.css';
import { JobCard } from '../JobCard';

const notices = [
  {
    companyName: 'Adobe',
    post: 'React Developer',
    salary: '5 LPA',
    city: 'Noida',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.'
  },
  {
    companyName: 'GradeUp',
    post: 'Node Developer',
    salary: '5.5 LPA',
    city: 'Noida',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.'
  },
  {
    companyName: 'Adobe',
    post: 'React Developer',
    salary: '5 LPA',
    city: 'Noida',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.'
  },
  {
    companyName: 'GradeUp',
    post: 'Node Developer',
    salary: '5.5 LPA',
    city: 'Noida',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.'
  },
  {
    companyName: 'Adobe',
    post: 'React Developer',
    salary: '5 LPA',
    city: 'Noida',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.'
  },
  {
    companyName: 'GradeUp',
    post: 'Node Developer',
    salary: '5.5 LPA',
    city: 'Noida',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.'
  }
];

const NoticesContainer = () => (
  <section className={classes.noticesContainer}>
    {notices.map(notice => (
      <JobCard className={classes.noticeCard} {...notice} />
    ))}
  </section>
);

export { NoticesContainer };
