# Base image
FROM node:22

# Set working directory
WORKDIR /app

COPY package.json /app

RUN npm install

# Copy files
COPY . /app

RUN npm run build

# Expose a port
EXPOSE 8611 

# Start the app
CMD ["npm", "start"]

