import socket from "./ws-client";

class ChatApp{
constructor(){
  socket.init('ws://localhost:3001');
  socket.registerOpenHandler(() => {
    let message = new ChatMessage({message: 'pow!'});
    socket.sendMessage(message.serialize());
  });
  socket.registerMessageHandler((data) => {
    console.log(data);
  });
}
}

class ChatMessage{
  constructor({
    message: m,
    user: u='batman',
     timestamp: t=(new Date()).getTime()
   }) {
    this.message = message;
    this.user = user;
    this.timestamp = timestamp;
  }
  serialize(){
    return{
      user:this.user,
      message:this.message,
      timestamp:this.timestamp
    };
  }
  /*
  constructor(data){
  }
  */
}
export default ChatApp;

//Ch. 17
//STEP TEN: run "babel app/scripts/src/app.js -0 app/scripts/dist/main.js"
//STEP ELEVEN: Run node server with "npm run dev"
