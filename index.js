var http = require("http");
var fs = require("fs");

var extract = require("./extract");
//const Mime = require('mime/Mime');
//var mime = require("mime");

var wss = require("./websockets-server"); //CH. 16 addition


//Writes an error
var handleError = function(err, res) {
  //var errorPage = extract(res.url);
  res.writeHead(err);
  res.end();
};



var server = http.createServer(function(req, res) {
  console.log("Responding to a request.");

  var filePath = extract(req.url);
  fs.readFile(filePath, function(err, data) {
    if (err) {
      handleError(err, res);
      return;
    } else {
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }


  });

  /*
  fs.readFile("app/index.html", function(err,data){
    if (err){
      handleError(err, res);
      return;
    } else{
      res.setHeader("Content-Type", "text/html"); //MIME header
      res.end(data);
    }
  });
  */
});
server.listen(3000);

//STEP ONE: run "npm install --save-dev nodemon"
//End of Ch. 15
//Bronze challenge: Create a custom error page instead of returning a status code
//Silver challenge: Provide a MIME type dynamically; install mime module using npm
//                  Add different files to app folder and load it
//Gold challenge: Move error handling to its own module
//Start of Ch. 16
//STEP TWO: run "npm install --save ws"
//STEP THREE: run "npm install -g wscat"
//STEP FOUR: wscat -c ws://localhost:3001
//STEP FIVE: stop nodemon and restart it with "npm run dev"
//STEP SIX: Open 3rd window and run "wscat -c http://localhost:3001"
//STEP SEVEN: Type messages in the other two windows
//OPTIONAL STEP: if you run "nodemon index.js", it should launch stuff
//For The More Curious (FTMC): socket.io WebSockets library
//FTMC: WebSockets as a Service - Go to www.firebase.com for a real-time platform
//Bronze challenge: Am I repeating myself
//                Update message handler so every message received is sent twice to users
//Silver Challenge: Speakeasy
//                Hide all messages from a user until they enter a secret password
//                When they enter the password, send all previous messages and let them
//                See new messages
//Gold challenge: Chat WebSocket
//                var chatClient = new WebSocket('http://localhost:3001');
//                Create a chat bot that automatically connects to chat Server
//                Greet users, respond to name
//END of Ch. 16
//Start of Ch. 17
//Extracted resource file into chattrbox folder
//Ignore warning about MIME type of CSS
//Install Babel
//STEP EIGHT: run "npm install -g babel-cli"
//            run "npm install --save-dev babel-core"
//            run "npm install --save-dev babel-preset-es2015"
//            use "sudo" if you have to
//STEP NINE: run "npm install --savedev browserify babelify watchify"
//4/15 Already installed everytihng in Ch. 17
