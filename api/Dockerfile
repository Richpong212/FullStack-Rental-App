#base image
FROM node:18-alpine

# set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package*.json ./

# install and cache app dependencies
RUN npm install

# nodemon for hot reload in development
RUN npm install -g nodemon

# Copy app source code
COPY . .

# expose port 8080
EXPOSE 8080

# start app
CMD ["yarn", "dev", "docker", "run", "-p", "8080:8080", "api"]

#run the docker file
#docker run -p 8080:8080  api
