import React from 'react';
import styles from './dashboard.module.css';
import JdList from '../jd-list/jd-list';
import Filter from '../filter/filter';

const Dashboard = () => (
  <div className={styles.Dashboard}>
    <Filter></Filter>
    <JdList></JdList>
  </div>
);

export default Dashboard;
