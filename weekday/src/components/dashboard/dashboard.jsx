import React, { useCallback, useEffect, useState } from 'react';
import './dashboard.css';
import apiService from '../../core/service/api.service';
import JdList from '../jd-list/jd-list';
import Filter from '../filter/filter';

const Dashboard = () => {

  const [jdDetails, setJdDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);

  const fetchData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    const result = await apiService.callApi(12, index);
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
    <div className='p-5'>
      <Filter className=""></Filter>
      {
        jdDetails ? (<JdList jdDetails={jdDetails}></JdList>) : (
          <div class="text-center">Loading ...</div>)
      }
    </div>
  )
};

export default Dashboard;
