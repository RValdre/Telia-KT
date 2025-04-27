# Telia-KT

Installation guide:

1.Clone this repository

2. Create Docker Mysql image and container with following commands:<br>
   2.1: Create mysql image with: docker pull MySQL<br>
   2.2: Build Docker container for mysql: docker run -d -p 3308:3306 --name=mysql-docker --env="MYSQL_ROOT_PASSWORD=root" --env="MYSQL_PASSWORD=root" --env="MYSQL_DATABASE=contacts"mysql<br>

3. Open backend-folder with desired idea (use following commands)<br>
   3.1 Clean the project with: ./gradlew clean<br>
   3.2 Build the jar files with: ./gradlew build -x test<br>
   3.3 Create backend docker image with: docker image build -t contact_backend .<br>
   3.4 Build backend docker container with: docker run -t --link mysql-docker:mysql -p 8080:8080 contact_backend<br>

4. Open contact-frontend folder with visual studio code (use following commands)<br>
   4.1 Run npm install<br>
   4.2 Run npm build<br>
   4.3 Create frontend docker image with: docker image build -t contact_frontend .<br>
   4.4 Build frontend docker container with: docker run -it -p 5173:5173 -d {frontend docker image id}<br>

Ff everything has been done correctly then the app should run on localhost:5173
