# Facebook Clone React Project

This project is a Facebook clone developed for learning purposes. It is a React SSR (Server-Side Rendering) application that mimics the functionality and user interface of Facebook. The primary goal of this project is to provide a hands-on learning experience for building web applications using React, server-side rendering, and authentication with Cognito.

## Project Structure

The project has the following structure:

- `app`: Contains the source code for the React application, components, contrainers, state management, etc. 
- `dist`: Contains the compiled server-side code.
- `infra`: Contains infrastructure-related files and scripts (eventually to be moved to its own repo)


## Available Scripts

In the project directory, you can run the following scripts:

- `build:server`: Builds the server-side code using the webpack configuration specified in `webpack.config.server.js`.
- `build:client`: Builds the client-side code using the webpack configuration specified in `webpack.config.client.js`.
- `build:all`: Builds both the server and client code by running `build:server` and `build:client` sequentially.
- `start`: Starts the server by executing the `server.js` file located in the `dist` directory.
- `dev`: Starts the development server by running the `dev.js` file.
- `infra:deploy`: Deploys the infrastructure using the `deploy.sh` script located in the `infra/deploy` directory.
- `infra:init:plan`: Generates an execution plan for initializing the infrastructure using Terraform.
- `infra:init:apply`: Applies the execution plan to initialize the infrastructure using Terraform.
- `infra:init:destroy`: Destroys the infrastructure using Terraform.

## Authentication

The project uses Cognito for authentication. The infra script spins up a cognito user pool and identity provider, but the values of this infra needs to be referenced in the .env to use locally. 

## Database Backend

Currently, the project does not have a database backend implemented. However, it is intended to include a PostgreSQL database. 

## Resources

[Trello](https://trello.com/b/3kBkMeTG/g-book)
