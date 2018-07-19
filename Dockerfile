# node Version
FROM node:8

# current Working Directory of the Project
WORKDIR /home/user/projects/nodeWithTestCase

COPY package*.json ./

# install Dependency
RUN npm i
# bundling your Source Code
COPY ..


EXPOSE 4000

CMD ["npm", "start"]