import { Paper } from '@mui/material';
import React, { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';

interface HomePageContainerProps {
  children: ReactNode;
}

const HomePageContainer: React.FC<HomePageContainerProps> = ({ children }) => {
  const theme = useTheme()
  return (
    <Paper elevation={0} style={{ height: '100vh', backgroundColor: theme.palette.background.default }}>
      {children}
    </Paper>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <div>SITE HEADER</div>
      <HomePageContainer>
        <div>Home Page</div>
      </HomePageContainer>
    </>
  );
};

export default HomePage;
