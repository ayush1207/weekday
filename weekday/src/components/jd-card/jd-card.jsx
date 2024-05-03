import React from 'react';
import styles from './jd-card.module.css';
import { Button } from '@mui/material';
import { borders } from '@mui/system';
import Box from '@mui/system/Box';



const JdCard = ({ cardDetail }) => {

  return (
    <Box component="section" sx={{ p: 2, border: '1px solid grey ',borderRadius: 2 ,whiteSpace: 'normal' ,  }}>
      {JSON.stringify(cardDetail)}
      <div>
        <div>{cardDetail.jdLink}</div>
        <div></div>
      </div>
      <div>
        About Company : 
        About us : 
        { }
      </div>
      <div>
        <div>
          <Button variant="contained">Easy Apply</Button>
        </div>
        <div>
          <Button variant="contained">Unlock Refrall Asks</Button>
        </div>
      </div>
    </Box>
  )
};

export default JdCard;
