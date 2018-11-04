import React, { Component } from 'react';
import request from 'superagent';

import classes from './NoticesContainer.module.css';
import { JobCard } from '../JobCard';

<<<<<<< HEAD
const notices = [
  {
    companyName: 'Adobe',
    post: 'React Developer',
    salary: '5 LPA',
    city: 'Noida',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
      status: 'selected'

  },
  {
    companyName: 'GradeUp',
    post: 'Node Developer',
    salary: '5.5 LPA',
    city: 'Noida',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
      status: 'pending'
  },
  {
    companyName: 'Adobe',
    post: 'React Developer',
    salary: '5 LPA',
    city: 'Noida',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
      status: 'selected'
  },
  {
    companyName: 'GradeUp',
    post: 'Node Developer',
    salary: '5.5 LPA',
    city: 'Noida',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
      status: 'rejected'
  },
  {
    companyName: 'Adobe',
    post: 'React Developer',
    salary: '5 LPA',
    city: 'Noida',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
      status: 'selected'
  },
  {
    companyName: 'GradeUp',
    post: 'Node Developer',
    salary: '5.5 LPA',
    city: 'Noida',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
      status: 'pending'
=======
class NoticesContainer extends Component {
  state = {
    notices: []
  };

  requests = [];

  dataMapper(notices) {
    const mapping = {
      company_name: 'companyName',
      job_profile: 'jobProfile'
    };

    notices.forEach(notice => {
      for (let key in mapping) {
        const newKey = mapping[key];
        notice[newKey] = notice[key];
      }
    });

    return notices;
>>>>>>> 64a2410037f8bf08d639cec3fc6c5ab9f37caa11
  }

  async componentDidMount() {
    try {
      const req = request.get('http://localhost:5000/notices');
      this.requests.push(req);
      const res = await req;
      const notices = this.dataMapper(res.body);
      this.setState({ notices });
    } catch (error) {
      console.log('Error Occurred', error);
    }
  }

  componentWillUnmount() {
    this.requests.forEach(req => req.abort());
  }

  render() {
    return (
      <section className={classes.noticesContainer}>
        {this.state.notices.map(notice => (
          <JobCard key={notice.id} className={classes.noticeCard} {...notice} />
        ))}
      </section>
    );
  }
}

export { NoticesContainer };
