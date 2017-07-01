import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    };
    this.socket = new WebSocket('ws://localhost:3001/');
    this.socket.onopen = (e) => {
      this.socket.onmessage = (event) => {
      console.log(event);
      const newMessage = JSON.parse(event.data);
      const messages = this.state.messages.concat(newMessage);
      this.setState({messages: messages});
      }
    }
  }

  addNewMessage(username, content) {
    const newMessage = {id: Date.now(), username: username, content: content};
    this.socket.send(JSON.stringify(newMessage)); 
  }
  
  userNotification (username) {
    const notification = {type: "postNotification", oldUser: this.state.currentUser.name, newUser: newUser};
    this.setState({currentUser:{name: newUser}});
    this.socket.send(JSON.stringify(notification));
    
  }
  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages = {this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} userNotification={this.userNotification.bind(this)} newMessage={this.addNewMessage.bind(this)}/>
      </div>
    );
  }

}

export default App;

