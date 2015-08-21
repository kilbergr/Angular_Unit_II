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

* Describe what both the same origin policy and CORS are.  
Same origin policy is a security mechanism by which one script can only access information on a second web page if they are from the same origin (defined by same port, URI scheme, and hostname). This is to prevent sensitive data from being universally accessible. CORS (Cross-Origin Resource Sharing) is a workaround that allows servers to specify the origins from which data may be accessed. 

* Try using $http.get() to make a request to https://itunes.apple.com/search?term=jack+johnson and display the title of every post on your template. You should get an error. What was the error? Why did the api.github.com domain work and not the itunes.com domain?  
Error: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.
Encountering this because of the same origin policy. We're using http get request, but making a request to an https page.

* What is a service? Is there a Ruby or JavaScript equivalent to Angular services?  
A service is similar to a module in JS or a gem in Ruby. It is a bit of reusable code that you can reference without having to write it yourself and is functional across the swath of code where you call it.  

* Explain in as much detail as possible what happens under the hood of $http.get()  
Just like other get requests -- 

* What is $q and how does it relate to $http?   
$q is a service that allows you to handle multiple outcomes of the $http requests. It's similar to what we do with AJAX calls where we have multiple paths according to whether there are issues with the response or not.

* Look at an angular app you have made previous (reddit clone or your portfolio site). What dependencies are there? Where do you see dependencies other than the contoller?  
In the portfolio app, the controllers include scope, routeParams, and location dependencies. The app.js file contains routeProvider and locaationProvider dependencies for app config.  

* In the above example (MathController) does the order of the dependencies matter? Does $scope have to come before $routeParams? Do the names matter? Could we name them something else?  
In regular JS order does not matter, but in inline array annotation it does matter which order (array must be before and ordered to correspond to function parameters). I think $scope and $routeParams must be called that because they are built-in available, rather than just merely variables. You can rename with inline array annotation, but I don't really see the point.

* To make the files smaller, developers minify their js files. Find a minification tool and minify your js code. Update your html file so that it now points to your newly minified js files. Does your angular app still work? If it stopped working, what is the problem?  As mentioned above, minifying breaks Angular apps because of dependency injection. Error: [$injector:unpr] Unknown provider: tProvider <- t <- MovieController   

* So far we have mainly seen one way to do dependency injection. Research and figure out the other two ways.   Which one is the best practice?   
Using the inline array annotation (preferred)
Using the $inject property annotation
Implicitly from the function parameter names (has caveats)

* When using inline array annotation does the order of anything matter? What order should match?   
See above.  

* Name at least 3 angular built in services that we have used so far.  
$http, $locationProvider, $routeProvider


