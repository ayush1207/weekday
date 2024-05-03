/**
 * 
 */
import React, { useState } from 'react';
/**
 * css imports
 */
import './filter.css';
/**
 * material imports
 */
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
/**
 *
 */
import { Label , Options } from '../../core/constants/filter.constant';


const Filter = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className='mt-2 mb-4 row'>
      <div className='col-md-2'>
        <label>{Label.role}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select Role" />}
        />
      </div>
      <div className='col-md-2' >
        <label>{Label.name}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select Name " />}
        />
      </div>
      <div className='col-md-2 col-6'>
        <label>{Label.stack}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select Tech Stack" />}
        />
      </div>
      <div className='col-md-1 col-6'>
        <label>{Label.experience}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select Exp." />}
        />
      </div>
      <div className='col-md-1 col-6'>
        <label>{Label.remote}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Remote" />}
        />
      </div>
      <div className='col-md-2 col-6'>
        <label>{Label.base}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select Base pay" />}
        />
      </div>
      <div className='col-md-2 col-12'>
        <label>{Label.location}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select Location" />}
        />
      </div>
    </div>
  );
};

export default Filter;
