import Box from '@mui/material/Box';
import React, { ReactNode } from 'react';

type CentredContainerProps = {
    children: ReactNode;
  };
  
  export const CentredContainer: React.FC<CentredContainerProps> = ({ children }) => (
    <Box
    display="flex"
    width={'100%'}
    height={'100%'}
    bgcolor="transparent"
    alignItems="center"
    justifyContent="center"
  >
    {children}
  </Box>
);
