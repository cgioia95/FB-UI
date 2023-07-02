// amplify-config.js

import Amplify from 'aws-amplify';
// @ts-ignore
Amplify.configure({
  Auth: {
    region: 'ap-southeast-2',
    userPoolId: '14akmr1laj31gfhllub915d8cv',
    userPoolWebClientId: '14akmr1laj31gfhllub915d8cv',
  },
});

export default Amplify;
