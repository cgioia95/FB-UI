// client/client.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../app/App';
import { Amplify } from 'aws-amplify';

  //@ts-ignore
  Amplify.configure({
    aws_project_region: 'ap-southeast-2',
    aws_cognito_identity_pool_id: 'ap-southeast-2:e7073935-7db9-409a-885f-924544269b16',
    aws_cognito_region: 'ap-southeast-2',
    aws_user_pools_id: 'ap-southeast-2_wGPaYtOaX',
    aws_user_pools_web_client_id: '14akmr1laj31gfhllub915d8cv',
    ssr: true
  });


ReactDOM.hydrate(
  <BrowserRouter> {/* Wrap your App component with BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
