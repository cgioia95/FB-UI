import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Auth } from 'aws-amplify';
import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteHeaderWithData } from '../components/SiteHeader/SiteHeader';
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
  
  const navigate = useNavigate()

  useEffect(() => {
    checkUser();
  }, []);



  const checkUser = async () => {
    try {
      await Auth.currentAuthenticatedUser();
    } catch (err) {
      navigate('/login');
    }
  };

  const signOut = async () => {
    Auth.signOut()
    navigate("/login")
  }

  return (
    <>
      <SiteHeaderWithData />
      <HomePageContainer>
        <button onClick={signOut}>LOG OUT </button>
      </HomePageContainer>
    </>
  );
};

export default HomePage;
