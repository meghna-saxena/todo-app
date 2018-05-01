# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
COPY src /usr/src/app/src
COPY public /usr/src/app/public
RUN npm install
RUN npm install create-react-app -g

# start app
EXPOSE 3000
CMD ["npm", "start"]

# Build with =>  docker build -t todo-app .
# Run with => docker run --rm -p3000:3000 todo-app