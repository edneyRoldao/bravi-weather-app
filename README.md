# bravi-weather-app

There are two ways to startup this application:

First way (node 9.x or above and angular-cli must be installed on your machine):

1 - clone or download this project <br>
2 - open up a terminal and go to where package.json is placed in.<br>
3 - run the following command: npm install<br>
4 - run the following command: npm rebuild node-sass<br>
5 - start server with the following command: ng serve <br>
<br>

Second way will be via docker:

1 - clone or download this project <br>
2 - open up a terminal and go to where Dockerfile is placed in.<br>
3 - Create an image with the following command: docker build -f Dockerfile -t image-name . <br>
4 - Create a container with the following command: docker run -d -p 4200:4200 image-name-step-above <br>
<br>

<br>
Note: this application is running on http://localhost:4200/
