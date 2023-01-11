FROM node:18

# Create app directory
WORKDIR /backend

# Install app dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

RUN npm i --location=global nodemon

# Copy source directory
COPY . .

CMD [ "nodemon" ]
