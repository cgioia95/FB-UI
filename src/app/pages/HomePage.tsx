import { Auth } from 'aws-amplify';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteHeaderWithData } from '../components/SiteHeader/SiteHeader';
import { PageContainer } from './helpers/PageContainer';



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
      <PageContainer>
        <button onClick={signOut}>LOG OUT </button>
      </PageContainer>
    </>
  );
};

export default HomePage;
