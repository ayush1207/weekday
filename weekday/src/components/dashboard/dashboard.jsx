import React from 'react';
import './dashboard.css';
import JdList from '../jd-list/jd-list';
import Filter from '../filter/filter';

const Dashboard = () => (
  <div className='p-5'>
    <Filter className=""></Filter>
    <JdList></JdList>
  </div>
);

export default Dashboard;
