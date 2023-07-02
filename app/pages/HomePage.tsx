import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { ReactNode } from 'react';
import { SiteHeaderWithData } from '../containers/SiteHeader';
import theme from '../helpers/theme';

interface HomePageContainerProps {
  children: ReactNode;
}

const StyledPaper = styled(Paper)`
  height: 100vh;
  background-color: ${theme.palette.secondary.main};
`;


const HomePageContainer: React.FC<HomePageContainerProps> = ({ children }) => {
  return (
    <StyledPaper elevation={0}>
      {children}
    </StyledPaper>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <SiteHeaderWithData />
      <HomePageContainer>
        
      </HomePageContainer>
    </>
  );
};

export default HomePage;
