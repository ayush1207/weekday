import React, { useState } from 'react';
import './filter.css';
import DropdownComp from '../dropdown/dropdown';

import TextField from '@mui/material/TextField';

import Autocomplete from '@mui/material/Autocomplete';


const top100Films = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Godfather: Part II',
  'The Dark Knight',
  '12 Angry Men',
  "Schindler's List",
  'Pulp Fiction',
];

const Label = {
  Role: 'Roles',
  Employees: 'No. of Employees',
  Experience: 'Experience',
  Remote: 'Remote',
  Base: 'Base Pay',
  Name: 'Select Company Name'
}

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
          options={top100Films}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select" />}
        />
      </div>
      <div className='col-md-3' >
        <label>{Label.Name}</label>
        <Autocomplete
          disablePortal
          options={top100Films}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select" />}
        />
      </div>
      <div className='col-md-2 col-6'>
        <label>{Label.Employees}</label>
        <Autocomplete
          disablePortal
          options={top100Films}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select" />}
        />
      </div>
      <div className='col-md-1 col-6'>
        <label>{Label.Experience}</label>
        <Autocomplete
          disablePortal
          options={top100Films}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select" />}
        />
      </div>
      <div className='col-md-1 col-6'>
        <label>{Label.Remote}</label>
        <Autocomplete
          disablePortal
          options={top100Films}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select" />}
        />
      </div>
      <div className='col-md-2 col-6'>
        <label>{Label.Base}</label>
        <Autocomplete
          disablePortal
          options={top100Films}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Select" />}
        />
      </div>
    </div>
  );
};

export default Filter;
