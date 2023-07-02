import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { ReactNode, useEffect } from 'react';
import { SiteHeaderWithData } from '../components/SiteHeader/SiteHeader';
import theme from '../helpers/theme';
import { Auth } from 'aws-amplify';

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
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
      console.log(currentAuthenticatedUser)
      // User is logged in, continue with the home page
    } catch (err) {
    }
  };

  return (
    <>
      <SiteHeaderWithData />
      <HomePageContainer>
      </HomePageContainer>
    </>
  );
};

export default HomePage;
