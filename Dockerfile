# Use a Node.js base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build:all

# Expose the desired port (if applicable)
EXPOSE 3000

# Specify the command to run your SSR app
CMD ["dist/server.js"]
