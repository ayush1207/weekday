import React from 'react';
import PropTypes from 'prop-types';
import styles from './dashboard.module.css';
// import JdCard from '../jd-card/jd-card';
import JdList from '../jd-list/jd-list';

const Dashboard = () => (
  <div className={styles.Dashboard}>
    <JdList></JdList>
  </div>
);

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
