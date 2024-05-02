import React, { useEffect } from 'react';
import styles from './jd-list.module.css';
import JdCard from '../jd-card/jd-card';
import apiService from '../../core/service/api.service';

const JdList = () => {


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.callApi();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.JdList}>
      <JdCard></JdCard>
    </div>
  );
}

export default JdList;
