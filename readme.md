# Express ejs Template

## Setup

- clone the new project from github
- run `npm install` from the main folder (the one with package.json)
- add your enviorment variables file to `.env`

## Scripts

- `npm start` to run app in production mode
- `npm run dev` to run app in development mode

## Routes

Routes are broken up into two routers and two controller classes.

### MainRoutes/MainController

This is pages that render EJS templates. The routes can be registered in server.js using the MainRoutes router and the corresponding function can be defined as a method in the MainController class in the controllers folder.

## Views

An EJS file making use of the head, header and footer partials for clreating a template for our web application.

 # index.ejs 
Displays the tasks that are pending and completed for a registered user

 # new.ejs 
Form to create new tasks 

 # main .ejs 
User sign up and Login Pages




Enjoy!
