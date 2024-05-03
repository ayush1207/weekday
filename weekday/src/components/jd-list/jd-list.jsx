import React, { useCallback, useEffect, useState } from 'react';
import styles from './jd-list.module.css';
import JdCard from '../jd-card/jd-card';
import apiService from '../../core/service/api.service';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';



const JdList = () => {

  const [jdDetails, setJdDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);


  const fetchData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    const result = await apiService.callApi(10, index);
    setJdDetails((prevItems) => [...prevItems, ...result.jdList]);
    setIndex((prevIndex) => prevIndex + 1);
    setIsLoading(false);
  }, [index, isLoading]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.callApi();
        setJdDetails(result.jdList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  return (
    <div className={styles.JdList}>
      <Box sx={{ flexGrow: 1, padding: 0 }}>
        {jdDetails ? (
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {jdDetails.map((data, index) => (
              <Grid xs={2} sm={4} key={index}>
                <JdCard cardDetail={data} key={data.jdUid} ></JdCard>
              </Grid>
            ))}
          </Grid>) :
          (<p>Loading</p>)}
      </Box>
    </div>
  );
}

export default JdList;
