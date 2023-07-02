// GOTCHA: Do not de-structure ENV variables - https://github.com/mrsteele/dotenv-webpack#limitations
export const getEnv = () => {
  return {
    ASSETS_URL: process.env.ASSETS_URL,
    AWS_REGION: process.env.AWS_REGION,
    AWS_COGNITO_IDENTITY_POOL_ID: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
    AWS_USER_POOLS_ID: process.env.AWS_USER_POOLS_ID,
    AWS_USER_POOLS_WEB_CLIENT_ID: process.env.AWS_USER_POOLS_WEB_CLIENT_ID
  }
  };
  