// GOTCHA: Do not de-structure ENV variables - https://github.com/mrsteele/dotenv-webpack#limitations
export const getEnv = () => ({
    ASSETS_URL: process.env.ASSETS_URL,
  });
  