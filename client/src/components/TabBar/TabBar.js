import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Divider } from 'antd';

import classes from './TabBar.module.css';

const TabBar = () => (
  <footer className={classes.tabBar}>
    <ul>
      <li title="Notices" className={classes.tabItem}>
        <NavLink to="/student/notices" className={classes.link} activeClassName={classes.activeLink}>
          <Icon type="project" theme="filled" className={classes.icon} />
        </NavLink>
      </li>
      <li>
        <Divider type="vertical" className={classes.divider} />
      </li>
      <li title="Notifs" className={classes.tabItem}>
        <NavLink to="/student/notifs" className={classes.link} activeClassName={classes.activeLink}>
          <Icon type="bell" theme="filled" className={classes.icon} />
        </NavLink>
      </li>
    </ul>
  </footer>
)

export { TabBar };
