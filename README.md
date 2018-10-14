# AttentiveDemo

This demo consists of three parts:

1.  Home - A simple land page
2.  Dogs - Made with two components. You can select one dog breed and see images of it, or you can use PokeDoge to catch dogs and name them. In future versions of the app you will be able to train them.
3.  Cats - Just random images of cats.

## How to run the demo

The demo was develop in Angular and NodeJs. In order to run the application you need to have nodeJs installed along with npm (https://nodejs.org/en/). Having NodeJs installed you have can proceed with the dependencies:
1.  Go to angular folder and run "npm install"
2.  Go to nodeserver folder and run "npm install"

With the dependencies installed start the nodeserver and then angular:
1.  Go to noderserver and run "node server.js";
2.  Go to angular and run "ng serve";

Finally go to your favorite browser and navigate to `http://localhost:4200/`.

## Development details

Branch "angular-structure" contains a simple web-application. It focus only in angular 6 and in the bellow functionalities:
1.  Routing
2.  Smart components and presentational components
3.  Structuring application with shared and core modules, along with services.
4.  Material theme and basic design
5.  Displaying spinner while performing async operations.
6.  Global error handling and service to show a modal to user.
7.  REST Apis (only get)

Branch "backend-server" improves on previous branch by moving the handling of the rest apis to a nodejs server:
1.  Angular refactored to connect to nodejs server
2.  NodeJs with express

Branch "full-application" improves on previous branch by implementing all CRUD operations in nodejs along with persitent with firebase:
1.  Creating more components on Angular to fully use CRUD operations
2.  Refactoring Angular to use lazy loading of modules
3.  Using promise-chain in NodeJs to combine requests information
4.  Using javascript modules to improve project organization 
5.  Connecting to firebase 
6.  Saving, Reading, Updating and Deleting data in firebase