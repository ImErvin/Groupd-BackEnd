# Groupd-BackEnd
*The Back-End for Groupd - A social networking application to find team mates for start up projects.*

## Table of Contents

+ [Intoduction](#intoduction)
+ [About Groupd](#about-groupd)
+ [Planning](#planning)
+ [Technologies](#technologies)
+ [Issues](#issues)
+ [How to Run](#how-to-run)
+ [Conclusion](#conclusion)

## Intoduction

Groupd-BackEnd was undertaken as an assignment for a semester long third year project. This assignment was devised and developed as a group project with [ImErvin](https://github.com/ImErvin). Groupd-BackEnd, the groupd API with contributions from both parties, is one of three parts of the assignment. The other two sections include [Groupd-FrontEnd](https://github.com/ImErvin/Groupd-FrontEnd), the web application developed by [ImErvin](https://github.com/ImErvin), and [Groupd-Mobile-Application](https://github.com/taraokelly/Groupd-Mobile-Application), the cross platform mobile application developed by [taraokelly](https://github.com/taraokelly). For more details about Groupd, please go to the About Groupd section.

## About Groupd

Groupd is a social networking site devised to help users find team mates to work on a project idea they may have. Groupd was designed with developers in mind, however, Groupd encourages and welcomes users of all professions and needs to use this platform to find teammates. Together, Ervin and I developed a shared database(see [Planning](#planning) for database schema) and RESTful API to manage our database and administer our CRUD features to assist our two front-ends(see [Groupd-BackEnd](https://github.com/ImErvin/Groupd-BackEnd) and [Groupd-Mobile-Application](https://github.com/taraokelly/Groupd-Mobile-Application) for full documentation). We wanted Groupd to allow users post their desired projects, communicate with other users and to work on projects with other users. Groupd can be used to recreationaly and/or to gain experience and to eventually build a portfolio from projects they have worked on. Groupd is also useful for finding team members for a start up business.

## Planning

Groupd began as a inidivual project by [ImErvin](https://github.com/ImErvin). Ervin set out to design and develop a RESTful API and a web-app to utilize the API. He set out to design an API that employs the CRUD functionalities, and does so adhering to the correct usage of the HTTP verbs; GET, POST, PUT, and DELETE.

Many modern applications use a common API to connect their mobile applications and web applications to the same database. [ImErvin](https://github.com/ImErvin) and I decided to try and learn how this method is implemented. We decided to form a group, where one creates the web application and the other creates the mobile applications but connect it to the same API.

Upon joining as a group, the team realized that we could add extra features. Together, we designed a new database schema, attached below, and updated the API to correspond with these changes.

![alt text](https://github.com/ImErvin/Groupd-BackEnd/blob/master/img/Groupd-DB-Design.png "Database Schema")

## Technologies

**ExpressJS**

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open source framework developed and maintained by the Node.js foundation.

**Mongoose**

Mongoose is a way to make connection with MongoDB database. It provides MongoDB validation and query building in a very simple manner and it makes development fast. Mongoose is built upon the MongoDB driver to provide programmers with a way to model their data.

**MongoDB**

MongoDB is a NoSQL, open source database that uses a document-oriented data model. Instead of using tables and rows as in relational databases, MongoDB is built on an architecture of collections and documents. Documents comprise sets of key-value pairs and are the basic unit of data in MongoDB.

**Why ExpressJS and Mongoose**

Mongoose and ExpressJS were chosen as, together, they are known to be a very efficient method of creating RESTful APIs.  A RESTful API holds no state of the requester and simply recieves requests and responds to those requests. ExpressJS and Mongoose were chosen because of their synergy and because the application is built using the MEAN stack.

The heavy lifting is done by mongoose when working with MongoDB and because of the time limitation, mongoose was the right choice to get a quick and efficient prototype up and running. Combined with Express, it was very fun and interesting to learn and understand why a RESTful approach to HTTP is so popular.

## Issues

+ Due to time limitations we decided to store the comments in the project document, rather the comments as a seperate document with a reference to it in the project document.

## The API Routes
The API is hosted on port 8080 with a prefix '/api'.

### Users

* */api/ - GET*

  Returns a welcoming message.

* */api/users - GET*

  Returns all the users in the database with all their details.

* */api/users - POST*

  Will recieve a user object, compare usernames to every other user object and attempt to add a new user to the collection if that username does not exist.

* */api/users/:username - GET*

  Will recieve a user's username as a parameter and findOne user with that username. If successful, it will return the user with the username passed in as a parameter, if unsuccessful, it will return an error message.

* */api/users/:username - DELETE*
  
  Will recieve a user's username as a parameter and findOneAndRemove a user with that username. If successfull, it will return a message, if unsuccessful it will return an error message.

* */api/users/:username - PUT*

  Will recieve a user object and user's username as a parameter, compare usernames to ever other user object and attempt to update that user. If some user details are null in the user object coming in through the PUT request, it will use the details already stored and only update those which have changed.

### Projects

* */api/projects - GET*

  Will return all the projects in the database and their details.

* */api/projects - POST*

  Will recieve a project object and attempt to put it on the database. A unique projectId is generated on this route and uses recursive function to generate a new projectId if the previously generated one already exists in the system.

* */api/projects/:projectId - GET*

  Will recieve a projectId as a parameter and findOne project in the database that matches that projectId. If successful, it will return that project or else it will return an error message.
  
* */api/projects/:projectId - DELETE*

  Will recieve a projectId as a parameter and findOneAndRemove a project from the database. If successful, it will return a message indicating the the project was deleted, or else it will return an error message.

* */api/projects/:projectId - PUT*

  Will recieve a project object and projectId as a parameter and attempt to update the project with the projectId (parameter). If some project details are null in the project object coming in through the PUT request, it will use the details already stored and only update those which have changed.

## How to Run

Download and install Node.js and npm, if not already downloaded or installed. You can find the necessary download [here](https://www.npmjs.com/get-npm).

Download and install MongoDB if you have not done so already. You can find the MongoDB download page [here](https://www.mongodb.com/download-center#community).

Clone this repository. Run the following command in the API directory:

```
npm install
```

If successful, then start the server by run the following command:

```
node apiServer.js
```

Access the API by sending methods to http://127.0.0.1:8080/api/..

## Conclusion

To conclude, this project has been a rewarding experience. Working in a group has been a great contributor to this. Together, we built an effective RESTful API with a well thought out database schema. However, we wished we had time to implement all the database the way we had planned, that we could have avoided straying away from our original database schema. We would have referenced a seperate comments document, rather than embeding the comments in the projects document, as the comments are indeed related data to the project, however the comments change with differing volatiliy to the rest of the project data. Finally, we would add a property like, "dormant": true/false. This property would be used in the place of actually deleting the user document, would solve the problem of the referenced usernames being confused with old/new users, and would serve useful to offer old users a recovery option.

Deploying the database onto a cloud and using the same database between apps would be another feature that we wanted to implement if we had the time. Upon attempting to deploy it to AWS, there were public IP errors and the API was not reachable outside of the virtual machine. We decided if we had future opprotunity to develop this, we would use Heroku or Microsoft Azure to host the database and API.

**References:**

[MongoDB](https://www.mongodb.com/)

[Mongoose](http://mongoosejs.com/)

[ExpressJS](https://expressjs.com/)

https://www.youtube.com/watch?v=-o_VGpJP-Q0

-----

__*Ervin Mamutov - G00311015@gmit.ie*__     __*Tara O'Kelly - G00322214@gmit.ie*__
