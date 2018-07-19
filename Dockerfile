# node Version
FROM node:8

# current Working Directory of the Project
WORKDIR ./

COPY package.json ./

# install Dependency
RUN npm i
# bundling your Source Code
COPY ./ ./


EXPOSE 4000

CMD ["npm", "start"]