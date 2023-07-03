import { Paper } from "@mui/material";
import React, { ReactNode } from 'react';
import styled from "styled-components";
import theme from "../../helpers/theme";

interface PageContainerProps {
    children: ReactNode;
  }
  
  const StyledPaper = styled(Paper)`
    height: 100%;
    min-height: 100vh;
    background-color: ${theme.palette.secondary.main};
  `;
  
  
export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
      <StyledPaper elevation={0}>
        {children}
      </StyledPaper>
    );
  };