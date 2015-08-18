UNIT II

* What are possible issues with this new file structure?  
The html file gets pretty heavy with all of the scripts needed. Also, if you have a bunch of anything, you will need to create new folders. Ideally within those folders you would have folders for different aspects--i.e. post controller folder with post controller in it and a comment controller in it plus a user controller folder with other controllers.
* Why do we want to serve our application in the first place? It seems to work fine when we just open index.html in the browser...   
Unless you want to send all your files to someone else to make your application run, you need a server.

EXERCISE: Open up your gmail(or similar email provider) account. Try clicking around and accessing the different features. Pay special attention to the url bar. What do you notice?   
The address doesn't change--some query parameters are added but the url stays the same.

* Why does Angular put a # in the route path?    
It seems like something that acts kind of like the '/' and kind of like the opposite. It sends the user data from the requested template, but doesn't render a new page. From stackoverflow: The # is an old browser shortcircuit which doesn't fire the request, which allows many js frameworks to build their own clientside rerouting on top of that.  


* Why isn't ngRoute part of Angular core? Name at least 2 other Angular modules we could use  
It was part of the Angular core, but in order to make Angular more modular, it was developed into a separate module instead.  
You could use ui-router or angular-route-segment.

* Compare and contrast client-side routing with server-side routing  
The former doesn't really change the routes, per se--it seems like it does, but essentially all that's happening is that different parts of the page are being shown to the user at different times according to the client-side routing. With server-side routing, the user is actually being sent to different pages with different rendered content. One is exclusively front end, the other back-end.

* Aside from route definitions, what else can go in a .config()? 
Anything that needs to be loaded upon route configuration, including services, providers, etc. 

* What is $rootScope?  
$rootScope is essentially the same as global scope in vanilla JS. What you declare there is valid in all controllers. 

* What is the $routeChangeSuccess event?  
$routeChangeSuccess is an event that broadcasts whether the route has been changed successfully or not. If a positive, it means all route dependencies have been resolved and ngView can instantiate the controller and render the relevent view.
