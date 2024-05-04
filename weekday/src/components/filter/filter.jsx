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
import { Label, Options, rolesConst, expConst, remoteConst, minBasePayConst, locationConst } from '../../core/constants/filter.constant';


const Filter = ({ onSetSelectedRole, onSetSelectedStack, onSetSelectedBase, onSetSelectedName, onSetSelectedRemote, onSetSelectedLocation, onSetSelectedExp,
  selectedRole, selectedStack, selectedBase, selectedName, selectedRemote, selectedLocation, selectedExp }) => {

  const handleSelectRole = (movie) => {
    onSetSelectedRole(movie);
  };

  const handleSelectStack = (movie) => {
    onSetSelectedStack(movie);
  };

  const handleSelectBase = (movie) => {
    onSetSelectedBase(movie);
  };

  const handleSelectName = (movie) => {
    onSetSelectedName(movie);
  };

  const handleSelectRemote = (movie) => {
    onSetSelectedRemote(movie);
  };

  const handleSelectLocation = (movie) => {
    onSetSelectedLocation(movie);
  };

  const handleSelectExp = (movie) => {
    onSetSelectedExp(movie);
  };

  return (
    <div className='mt-2 mb-4 row'>
      <div className='col-md-2'>
        <label>{Label.role}</label>
        <Autocomplete
          disablePortal
          options={rolesConst}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelectRole(value)}
          renderInput={(params) => <TextField {...params} label="Select Role" />}
        />
      </div>
      <div className='col-md-2' >
        <label>{Label.name}</label>
        <Autocomplete
          disablePortal
          options={Options}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelectName(value)}
          renderInput={(params) => <TextField {...params} label="Select Name " />}
        />
      </div>
      <div className='col-md-2 col-6'>
        <label>{Label.stack}</label>
        <Autocomplete
          disablePortal
          options={rolesConst}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelectStack(value)}
          renderInput={(params) => <TextField {...params} label="Select Tech Stack" />}
        />
      </div>
      <div className='col-md-1 col-6'>
        <label>{Label.experience}</label>
        <Autocomplete
          disablePortal
          options={expConst}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelectExp(value)}
          renderInput={(params) => <TextField {...params} label="Select Exp." />}
        />
      </div>
      <div className='col-md-1 col-6'>
        <label>{Label.remote}</label>
        <Autocomplete
          disablePortal
          options={remoteConst}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelectRemote(value)}
          renderInput={(params) => <TextField {...params} label="Remote" />}
        />
      </div>
      <div className='col-md-2 col-6'>
        <label>{Label.base}</label>
        <Autocomplete
          disablePortal
          options={minBasePayConst}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelectBase(value)}
          renderInput={(params) => <TextField {...params} label="Select Base pay" />}
        />
      </div>
      <div className='col-md-2 col-12'>
        <label>{Label.location}</label>
        <Autocomplete
          disablePortal
          options={locationConst}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleSelectLocation(value)}
          renderInput={(params) => <TextField {...params} label="Select Location" />}
        />
      </div>
    </div>
  );
};

export default Filter;
