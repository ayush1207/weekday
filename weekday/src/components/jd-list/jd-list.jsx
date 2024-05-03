import React, { useEffect, useState } from 'react';
import styles from './jd-list.module.css';
import JdCard from '../jd-card/jd-card';
import apiService from '../../core/service/api.service';

const JdList = () => {

  const [jdDetails , setJdDetails] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.callApi();
        setJdDetails(result.jdList);
        console.log(result)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.JdList}>
      {jdDetails ? 
        (jdDetails.forEach(data => {
          <JdCard cardDetail={data} key="{data.jdUid}"></JdCard>
        })) : (<p>Loading</p>)
      }
    </div>
  );
}

export default JdList;
