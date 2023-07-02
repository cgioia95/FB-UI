import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';
import SiteHeaderSearchBar from '../../containers/SiteHeaderSearchBar/SiteHeaderSearchBar';
import { prefixAssetImagesUrl } from '../../helpers/prefixAssetsUrl';
import theme from '../../helpers/theme';

const SiteHeader = styled(AppBar)`
  height: 56px;
  background-color: ${theme.palette.secondary.light};
`;

export const SiteHeaderWithData = () => {

  return (
    <SiteHeader position="sticky">
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <img src={prefixAssetImagesUrl("logo.svg")} />
        <SiteHeaderSearchBar />
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography color="black">Messenger</Typography>
          <Typography color="black">Notifications</Typography>
          <Typography color="black">Profile</Typography>
        </Box>
      </Toolbar>
    </SiteHeader>
  );
};
