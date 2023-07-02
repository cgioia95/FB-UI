import { Clear as ClearIcon, Search as SearchIcon } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';

const SiteHeaderSearchBar = () => {
  return (
    <TextField
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SiteHeaderSearchBar;
