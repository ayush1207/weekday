import React from 'react';
import PropTypes from 'prop-types';
import styles from './dashboard.module.css';
// import JdCard from '../jd-card/jd-card';
import JdList from '../jd-list/jd-list';
import Filter from '../filter/filter';

const Dashboard = () => (
  <div className={styles.Dashboard}>
    <Filter></Filter>
    <JdList></JdList>
  </div>
);

export default Dashboard;
