/**
 * react imports
 */
import React, { useState } from 'react';
/**
 * material ui imports
 */
import { Button } from '@mui/material';
/**
 * style imports
 */
import './jd-card.css';
/**
 * bootstrap imports
 */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * Card data of Jd
 */
const JdCard = ({ cardDetail }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='border rounded-5 p-4 minHeight__Card'>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <img className='rounded-2 object-fit-contain logo' src={cardDetail.logoUrl} alt="" />
          </Col>
          <Col xs={6} md={8} className="m-0">
            <p className="m-0 h5">{cardDetail.companyName}</p>
            <p className="m-0">{cardDetail.jobRole}</p>
            <p className='m-0'> <small>{cardDetail.location}</small></p>
          </Col>
        </Row>
      </Container>
      <div className='mt-3'>
        Estimated Salary : {cardDetail.salaryCurrencyCode ? cardDetail.salaryCurrencyCode + ' ' : 'Rs'}{cardDetail.minJdSalary ? cardDetail.minJdSalary + '-' : ''}{cardDetail.maxJdSalary} {cardDetail.salaryCurrencyCode == 'USD' ? 'K' : 'LPA'}
      </div>
      <div id="jobDetailsFadeDiv" className='position-relative mt-3'>
        <p className='h5'>About Company :</p>
        <div class="maxHeight__detail-company overflow-auto">
          <p className={!showMore ? 'jobDetailsFade fw-bold' : 'fw-bold'}>About us :</p>
          <p className='overflow-hidden'>{showMore ? cardDetail.jobDetailsFromCompany : `${cardDetail.jobDetailsFromCompany.substring(0, 230)}...`}</p>
        </div>
      </div>
      <div className='w-100 text-center'>
        <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
      </div>
      {cardDetail.minExp ? (<div>
        Experience : {cardDetail.minExp ?? cardDetail.minExp}{cardDetail.maxExp ? '-' + cardDetail.maxExp : ''} years
      </div>) : (<div className='fw-lighter'>.</div>)}
      <div>
        <p className="mt-2"><Button variant="contained" className='w-100'>Easy Apply</Button></p>
      </div>
    </div>
  )
};

export default JdCard;
