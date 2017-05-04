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

Groupd is a social netwrking site devised to help users find team mates to work on a project idea they may have. Groupd was designed with developers in mind, however, Groupd encourages and welcomes users of all professions and needs to use this platform to find teammates. Together, Ervin and I developed a shared database(see [Planning](#planning) for database schema) and RESTful API to manage our database and administer our CRUD features to assist our two front-ends(see [Groupd-BackEnd](https://github.com/ImErvin/Groupd-BackEnd) and [Groupd-Mobile-Application](https://github.com/taraokelly/Groupd-Mobile-Application) for full documentation). We wanted Groupd to allow users post their desired projects, communicate with other users and to work on projects with other users. Groupd can be used to recreationaly and/or to gain experience and to eventually build a portfolio from projects they have worked on, or to find team members for a start up business.

## Planning

Groupd began as a inidivual project by [ImErvin](https://github.com/ImErvin). Ervin set out to design and develop a RESTful API and a web-app to utilize the API. He set out to design an API that employs CRUD functionalities, and does so adhering to the correct usage of the HTTP verbs; GET, POST, PUT, and DELETE.

Upon joining as a group, the team realized that we could add extra features. Together, we designed a new database schema, attached below, and updated the API to correspond with these changes.

![alt text](https://github.com/ImErvin/Groupd-FrontEnd/blob/master/img/Groupd-DB-Design.png "Database Schema")

## Technologies

**ExpressJS**

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open source framework developed and maintained by the Node.js foundation.

**Mongoose**

Mongoose is a way to make connection with mongodb database. It provides mongodb validation and query building in a very simple manner and it makes development fast. Mongoose is built upon the MongoDB driver to provide programmers with a way to model their data.

**MongoDB**

MongoDB is a NoSQL, open source database that uses a document-oriented data model. Instead of using tables and rows as in relational databases, MongoDB is built on an architecture of collections and documents. Documents comprise sets of key-value pairs and are the basic unit of data in MongoDB.

**Why ExpressJS and Mongoose**

Mongoose and ExpressJS were chosen as, together, they are known to be a very efficient method of creating RESTful APIs.

## Issues

+ Due to time limitations we decided to store the comments in the project document, rather the comments as a seperate document with a reference to it in the project document.

## How to Run

Download and install Node.js and npm, if not already downloaded or installed. You have find the necessary download [here](https://www.npmjs.com/get-npm).

Download and install MongoDB if you have not done so already. You can find the MongoDB download page [here](https://www.mongodb.com/download-center#community).

Clone this repository. Run the following command in the API directory:

```
npm install
```

If successful, then start the server by run the following command:

```
node apiServer.js
```

## Conclusion

To conclude, this project has been a rewarding experience. Working in a group has been a great contributor to this. Together, we built an effective with a well thought out database schema. However, we wished we had time to implement all the database the way we had planned, that we could have avoided straying away from our original database schema. We would have referenced a seperate comments document, rather than embeding the comments in the projects document, as the comments are indeed related data to the project, however the comments change with differing volatiliy to the rest of the project data. Finally, we add a property like, "dormant": true/false. This property would be used in the place of actually deleting the user document, would solve the problem of the referenced usernames(or IDs if that would be changed) being confused with a old/new users, and would serve useful to offer old users a recovery option.

**References:**

[MongoDB](https://www.mongodb.com/)
[Mongoose](http://mongoosejs.com/)
[ExpressJS](https://expressjs.com/)
https://www.youtube.com/watch?v=-o_VGpJP-Q0