import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CentredContainer } from '../components/lib/CentredContainer';
import { PageContainer } from './helpers/PageContainer';

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await Auth.signUp({
                username: email,
                password: password,
                attributes: {
                    email: email
                }
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

                <div>
                    <div>REGISTER SCREEN</div>

                    <form onSubmit={handleRegister}>
                        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </CentredContainer>
        </PageContainer>
    );
};
