import React from 'react';
import PropTypes from 'prop-types';
import styles from './jd-card.module.css';
import { Button } from '@mui/material';

const JdCard = ({ cardDetail }) => {

  return (
    <div className={styles.JdCard}>
      <div className='border rounded-2'>
        <div class="">
          <div>{cardDetail.jdLink}</div>
          <div></div>
        </div>
        <div class="">
          About Company :
          About us :
          { }
        </div>
        <div>
          <Button variant="contained">Easy Apply</Button>
          <Button variant="contained">Unlock Refrall Asks</Button>
        </div>
      </div>
    </div>)
};

export default JdCard;
