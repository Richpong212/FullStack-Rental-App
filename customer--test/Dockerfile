FROM node:12.16.1-alpine

# Create app directory
WORKDIR /usr/src/app

# copy package.json to the container
COPY package*.json ./

# install dependencies
RUN npm install

# copy all the files from the current directory to the container
COPY . .

# expose port 3000
EXPOSE 3000

# run the command
CMD ["npm", "start"]
