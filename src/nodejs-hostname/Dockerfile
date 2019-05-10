FROM ubuntu:trusty

# Following not needed, since express creates such a file:
# COPY src/package.json /srv/www/package.json

RUN apt-get update \
    && apt-get install nodejs -y \
	&& apt-get install npm -y \
	&& ln -s /usr/bin/nodejs /usr/bin/node \
	&& npm config set ca "" \
	&& npm install -g express-generator \
	&& cd /srv \
	&& express www \
	&& cd www \
	&& npm install

COPY src/index.js /srv/www/

# EXPOSE 8080

CMD ["nodejs", "/srv/www/index.js"]

## Comments:
#  - install nodejs
#  - install npm
#  - provide ln:node -> nodejs (express uses $ node and not $ nodejs)
#  - avoid certificate problem when installing express
#  - create express project
#  - install dependencies for express project
#  - copy server code index.js from host
