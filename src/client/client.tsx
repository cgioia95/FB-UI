// client/client.tsx
import { Amplify } from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../app/App';
import { getEnv } from '../app/helpers/getEnv';

  const {AWS_REGION, AWS_COGNITO_IDENTITY_POOL_ID, AWS_USER_POOLS_ID, AWS_USER_POOLS_WEB_CLIENT_ID} = getEnv()

  // eslint-disable-next-line
  //@ts-ignore
  Amplify.configure({
    aws_project_region: AWS_REGION,
    aws_cognito_identity_pool_id: AWS_COGNITO_IDENTITY_POOL_ID,
    aws_cognito_region: AWS_REGION,
    aws_user_pools_id: AWS_USER_POOLS_ID,
    aws_user_pools_web_client_id: AWS_USER_POOLS_WEB_CLIENT_ID,
    ssr: true
  });


ReactDOM.hydrate(
  <BrowserRouter> {/* Wrap your App component with BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
