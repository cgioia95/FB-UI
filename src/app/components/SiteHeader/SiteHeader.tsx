import { styled, AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { Chat as ChatIcon, NotificationsNone as NotificationsNoneIcon } from '@mui/icons-material';
import React from 'react';
import SiteHeaderSearchBar from '../../containers/SiteHeaderSearchBar/SiteHeaderSearchBar';
import { prefixAssetImagesUrl } from '../../helpers/prefixAssetsUrl';
import theme from '../../helpers/theme';

const SiteHeader = styled(AppBar)`
  height: 56px;
  background-color: ${theme.palette.secondary.light};
`;

const StyledChatIcon = styled(ChatIcon)`
  color: black;
`

const StyledNotificationIcon = styled(NotificationsNoneIcon)`
  color: black;
`

export const SiteHeaderWithData = () => {

  return (
    <SiteHeader position="sticky">
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <img src={prefixAssetImagesUrl("logo.svg")} />
        <SiteHeaderSearchBar />
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <IconButton>
            <StyledChatIcon />
        </IconButton>
        <IconButton>
            <StyledNotificationIcon />
        </IconButton>
        <img width="40px" height="40px" style={{borderRadius: "50%"}} src={prefixAssetImagesUrl("sample_dp.jpeg")} />
        </Box>
      </Toolbar>
    </SiteHeader>
  );
};
