import React, { useCallback, useEffect, useState } from 'react';
import styles from './jd-list.module.css';
import JdCard from '../jd-card/jd-card';
import apiService from '../../core/service/api.service';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';



const JdList = ({ jdDetails }) => {

  return (
    <div className={styles.JdList}>
      <Box sx={{ flexGrow: 1, padding: 0 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {jdDetails.map((data, index) => (
            <Grid sm={4} key={index}>
              <JdCard cardDetail={data} key={data.jdUid} ></JdCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default JdList;
