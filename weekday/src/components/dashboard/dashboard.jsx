/**
 * react imports
 */
import React, { useCallback, useEffect, useState } from 'react';
/**
 * design imports
 */
import './dashboard.css';
/**
 * service imports
 */
import apiService from '../../core/service/api.service';
/**
 * component imports
 */
import JdList from '../jd-list/jd-list';
import Filter from '../filter/filter';

const Dashboard = () => {

  const [jdDetails, setJdDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);
  const [filteredJdDetails, setFilteredJdDetails] = useState();

  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedStack, setSelectedStack] = useState(null);
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedRemote, setSelectedRemote] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedExp, setSelectedExp] = useState(null);

  /**
   * fetch data from api
   */
  const fetchData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    const result = await apiService.callApi(12, index);
    setJdDetails((prevItems) => [...prevItems, ...result.jdList]);
    setIndex((prevIndex) => prevIndex + 1);
    setIsLoading(false);
    showJdConditionally();
  }, [index, isLoading,jdDetails,filteredJdDetails]);


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
    showJdConditionally();
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

  /**
   * show the data based on filters
   */
  const showJdConditionally = useCallback(() => {
    if (!jdDetails) return;

    if (selectedRole || selectedStack || selectedBase || selectedName || selectedRemote || selectedLocation || selectedExp) {
      const filteredJdD = jdDetails.filter((job) => {
        if (
          (selectedRole && job.jobRole.toLowerCase() !== selectedRole.toLowerCase()) ||
          (selectedStack && job.stack.toLowerCase() !== selectedStack.toLowerCase()) ||
          (selectedBase && (job?.maxJdSalary < selectedBase || job?.minJdSalary > selectedBase)) ||
          (selectedName && job.companyName.toLowerCase() !== selectedName.toLowerCase()) ||
          (selectedRemote && job.location.toLowerCase() !== selectedRemote.toLowerCase()) ||
          (selectedLocation && job.location.toLowerCase() !== selectedLocation.toLowerCase()) ||
          (selectedExp && (job.minExp > selectedExp || job.maxExp < selectedExp))
        ) {
          return false;
        }
        return true;
      });
      setFilteredJdDetails(filteredJdD);
    } else {
      setFilteredJdDetails(jdDetails);
    }
  }, [selectedRole, selectedStack, selectedBase, selectedName, selectedRemote, selectedLocation, selectedExp, jdDetails]);


  useEffect(() => {
    showJdConditionally();
  }, [selectedRole, selectedStack, selectedBase, selectedName, selectedRemote, selectedLocation, selectedExp, jdDetails]);


  return (
    <div className='p-5'>
      <Filter className="" onSetSelectedRole={setSelectedRole}
        onSetSelectedStack={setSelectedStack}
        onSetSelectedBase={setSelectedBase}
        onSetSelectedName={setSelectedName}
        onSetSelectedRemote={setSelectedRemote}
        onSetSelectedLocation={setSelectedLocation}
        onSetSelectedExp={setSelectedExp}
        selectedRole={selectedRole}
        selectedStack={selectedStack}
        selectedBase={selectedBase}
        selectedName={selectedName}
        selectedRemote={selectedRemote}
        selectedLocation={selectedLocation}
        selectedExp={selectedExp}
      >
      </Filter>
      {selectedStack} {selectedRole}
      {
        filteredJdDetails ? (<JdList jdDetails={filteredJdDetails}></JdList>) : (
          <div class="text-center">Loading ...</div>)
      }
    </div>
  )
};

export default Dashboard;
