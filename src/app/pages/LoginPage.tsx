import { Box } from '@mui/system';
import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CentredContainer } from '../components/lib/CentredContainer';
import { prefixAssetImagesUrl } from '../helpers/prefixAssetsUrl';
import { PageContainer } from './helpers/PageContainer';


export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await Auth.signIn({
                username: email,
                password: password,
            });

            navigate('/');
        } catch (error) {
            console.log('Error registering:', error);
        }
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <PageContainer >
        <CentredContainer> 
      

            <Box height="496px" width={"980px"} bgcolor="red" display="flex"> 
                <Box width="580px">
                    <img src={prefixAssetImagesUrl("login_logo.svg")} width={"301px"} height={"106px"} />
                    <h2> Facebook helps you connect and share with the people in your life </h2> 
                 </Box>
                <Box width="396px">
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    <button type="submit">Login</button>
                </form>
                 </Box>
                

           </Box>
        </CentredContainer>
        </PageContainer>

    );
};
