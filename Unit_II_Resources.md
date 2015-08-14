UNIT II

* What are possible issues with this new file structure?  
The html file gets pretty heavy with all of the scripts needed. Also, if you have a bunch of anything, you will need to create new folders. Ideally within those folders you would have folders for different aspects--i.e. post controller folder with post controller in it and a comment controller in it plus a user controller folder with other controllers.
* Why do we want to serve our application in the first place? It seems to work fine when we just open index.html in the browser...   
Unless you want to send all your files to someone else to make your application run, you need a server.

EXERCISE: Open up your gmail(or similar email provider) account. Try clicking around and accessing the different features. Pay special attention to the url bar. What do you notice?   
The address doesn't change--some query parameters are added but the url stays the same.

* Why does Angular put a # in the route path?    
It seems like something that acts kind of like the '/' and kind of like the opposite. It sends the user data from the requested template, but doesn't render a new page. From stackoverflow: The # is an old browser shortcircuit which doesn't fire the request, which allows many js frameworks to build their own clientside rerouting on top of that.  

