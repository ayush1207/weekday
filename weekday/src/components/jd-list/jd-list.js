import React from 'react';
import PropTypes from 'prop-types';
import styles from './jd-list.module.css';
import JdCard from '../jd-card/jd-card';

const JdList = () => (
  <div className={styles.JdList}>
    <JdCard></JdCard>
  </div>
);

JdList.propTypes = {};

JdList.defaultProps = {};

export default JdList;
