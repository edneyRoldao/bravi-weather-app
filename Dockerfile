FROM node:latest
MAINTAINER Edney Roldao
COPY . /var/www
WORKDIR /var/www
RUN npm install -g @angular/cli@1.6.6
RUN npm install
RUN npm rebuild node-sass
ENTRYPOINT ng serve --host 0.0.0.0
EXPOSE 4200
