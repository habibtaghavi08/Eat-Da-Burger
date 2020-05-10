# Eat-Da-Burger

MySQL / NODE EXPRESS / HANDLEBARS

The Burger Application is a demo of the ability to utilize a database to use CRUD (Create, Read, Update, and Delete) to allow the user to Add a burger to their List. It will let the user know if the burger has been devoured, or allow them to press the button to "Eat" da Burger.

## Eat Da Burger web page

![Eat Da Burger]/assets/img/burger.png

## TECHNOLOGIES USED

* Node.js
* Express.js
* NPM Documentation
* MySQL Database
* Handlebars
* MVC Pattern
* HTML
* CSS
* BootStrap
* JavaScript
* JQuery
* API's
* API Routing
* AJAX

## Getting Started

These instructions will get you a copy of the project [Burger App Git hub Repo](https://github.com/Mlusso06/EatDaBurger) up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need:

* Code editing [Visual Studio](https://visualstudio.microsoft.com/)
* Work bench ui [MySQL](https://dev.mysql.com/doc/workbench/en/)

```Open your Code editing software (example Visual Studio)
```

Open the "Terminal" in studio
perform a git clone (<https://github.com/habibtaghavi08/Eat-Da-Burger.git)>

### Installing

After having the files cloned into your Studio, I would perform a

* "Save Workspace AS" to have a workspace to come back to.
* Next you will need to install your code's Dependencies
* This will capture all the items in your package.json file

See below on how to perform the install.

```npm i
```

Next open MySQL and create a new "connection"

* create a user name
* set up a pass word

Now you will create your own .env file in the root folder and enter the following info.

```DotENV File
   DBhost = "localhost"
   DBuser = "root" or your username
   DBPass = "root" or your pass word chosen

```

Now go into the (/models/schema.sql) and (seeds.sql) files and copy the information and enter into your workbench.
Be sure to run the code to create your DB (data base) and Tables.  Then on the seeds file, run that code to create the usable information.

## Running the server

Now you will want to run the web site locally.

### Right Click your server.js file and OPEN in Terminal

This will open your terminal in your "Root" folder and allow you to run the server "you may have done this already to get your  "npm i " completed

```node server.js
```

### You should now see the serving running

click on the link to open your web browser "local host"

```Server listening on: http://localhost:8000
```

## Deployment

App was deployed with [Heroku](https://dashboard.heroku.com/apps)

### Please read individual instructions for more detail

## Project Team

* **SEYED HABIB TAGHAVI** - *Team Lead and Solo Developer* - [habibtaghavi08](https://github.com/habibtaghavi08)

## Acknowledgments

* Thanks to VANDERBILT UNIVERSITY
* Thanks to My Tutor & My Mentor PHIL LOY
* Thanks to our Class instructors, Sub-Instructors, and the TAs that have helped define and layout the expectations of the assignment
