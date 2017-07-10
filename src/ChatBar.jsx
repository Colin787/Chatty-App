import React, { Component } from 'react';

class ChatBar extends Component {

//'enter' key press for the messages 

  handleMessage = (event) => {
    const content = this.refs.content.value;
    const addedUser = this.refs.username.value;
    if (event.key === 'Enter') {
      this.props.addNewMessage(addedUser, content);
      this.refs.content.value = '';
    }
  }

//'enter' key press for the users name change

  handleUser = (event) => {
    let content = this.refs.content.value;
    let addedUser = this.refs.username.value;
    if (event.key === 'Enter') {
      this.props.userNotification(addedUser);
    }
  }

//used onkeypress for all.. didnt know if that was what
//I should have used or not but it seemed right and it works
  render() {
    return (
      <footer className="chatbar">
        <input ref="username" className="chatbar-username" placeholder={this.props.currentUser.name} defaultValue={this.props.currentUser.name} onKeyPress={this.handleUser} />
        <input ref="content" className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.handleMessage} />
      </footer>
    );
  }
}
export default ChatBar