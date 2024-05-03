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
      <div className='col-md-3'>
        <label>{Label.Role}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select" />}
        />
      </div>
      <div className='col-md-3' >
        <label>{Label.Name}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select" />}
        />
      </div>
      <div className='col-md-2 col-6'>
        <label>{Label.Employees}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select" />}
        />
      </div>
      <div className='col-md-1 col-6'>
        <label>{Label.Experience}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select" />}
        />
      </div>
      <div className='col-md-1 col-6'>
        <label>{Label.Remote}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select" />}
        />
      </div>
      <div className='col-md-2 col-6'>
        <label>{Label.Base}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select" />}
        />
      </div>
    </div>
  );
};

export default Filter;
