# Use the official Node.js image as the base image
FROM node:latest as node

# Set the working directory to the location of your Angular project
WORKDIR /app

# Copy the rest of the application files to the container
COPY . .

# # Copy the package.json and package-lock.json files to the container
# COPY package*.json ./

# Install dependencies
RUN npm install

# RUN npm install -g @angular/cli

# Build the Angular application
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/angular-demo /usr/share/nginx/html
# Expose the port on which the application is running
# EXPOSE 4200

# Start the server
# CMD ["npm", "start"]