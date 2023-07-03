import { Search as SearchIcon } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField, styled } from '@mui/material';
import React from 'react';

const StyledSearchBar = styled(TextField)`
  & .MuiInputBase-input {
    padding-top: 7px;
    padding-bottom: 9px;
    height: 30px;
  }

  & .MuiInputBase-root {
    border-radius: 20px;
    padding-left: 4px;
    margin-bottom: 6px;
  }

  & .MuiIconButton-root {
    padding-right: 0px;
  }
`;

const SiteHeaderSearchBar = () => {
  return (
    <StyledSearchBar
      placeholder="Search Facebook"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
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
