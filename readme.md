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

### todoRoutes/MainController

This is pages that render EJS templates, Which shows Task of user Logged in User. The routes are registered in server.js using the todoRoutes router and the corresponding functionsare  defined as a method in the MainController class in the controllers folder.

### userRouter/UserauthController

This is pages that render EJS templates that contains User Signin and Signup forms. The routes are registered in server.js using the userRoutes router and the corresponding function can be defined as a method in the UserauthController class in the controllers folder.

## Views

An EJS file making use of the head, header and footer partials for clreating a template for our web application.

 # index.ejs 
Displays the tasks that are pending and completed for a registered user

 # new.ejs 
Form to create new tasks 

 # main .ejs 
User sign up and Login Pages


## 🖼 Website Images

![Screenshot (1)](https://user-images.githubusercontent.com/103515582/216122922-3e5aabcc-d036-4449-a2f7-55a4bd4c3eb2.png)

![Screenshot (2)](https://user-images.githubusercontent.com/103515582/216122870-7d8643e6-1de2-493f-8847-d33abdc58329.png)


![Screenshot (3)](https://user-images.githubusercontent.com/103515582/216123779-b8b93675-3591-4b87-8943-d237bae1dadf.png)



Enjoy!
