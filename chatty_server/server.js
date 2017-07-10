const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({
  server
});

const uuidv1 = require('uuid/v1');

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  })
}

//sets initial user count to 0
let count = 0;
wss.on('connection', function connection(ws) {

//adds one to the count if a user connects

  count ++;
  console.log('Client connected');

//broadcasts the user count to be rendered on the client side  

  wss.broadcast(JSON.stringify({
    type: 'userCount',
    count
  }));

//switch that handles the message and notifications on the server side

  ws.on('message', function incoming(message) {
    const msgObj = JSON.parse(message);
    switch (msgObj.type) {
      case "postMessage":
        msgObj.type = "incomingMessage",
          msgObj.id = uuidv1(),
          console.log(msgObj)
        wss.broadcast(JSON.stringify(msgObj))
        break;
      case "postNotification":
        msgObj.type = "incomingNotification",
          msgObj.id = uuidv1(),
          console.log(msgObj)
        wss.broadcast(JSON.stringify(msgObj));
        break;
      default:
        throw new Error("Unknown event type " + data.type);
    }
  })
  ws.on('close', () => {

//this count is for when a client leaves the page

    count --;
    console.log('Client disconnected');

//broadcasts the user count to be rendered on the client side  

    wss.broadcast(JSON.stringify({
      type: 'userCount',
      count
    }));
  });
});

//chatty_server runs on 3001 port
server.listen(3001, function listening() {
  console.log('Listening on %d', server.address().port);
});