import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      content: ""
    };
    this.userChanged = this.userChanged.bind(this);
    this.onEnterPressed = this.onEnterPressed.bind(this);
  }
  userChanged(event) {
    const newUser = this.refs.user.value;
    if (event.key === 'Enter') {
      this.props.userNotification(newUser);
    }
  }
  onEnterPressed(event) {
    console.log('key pressed: ', event.key);
    const user = this.refs.user.value
    const content = this.refs.content.value
    if (event.key === 'Enter') {
      this.props.newMessage(user, content);
      this.setState({
        content: ''
      });
    }
  }
  render() {
    return (
      <div>
        <footer className="chatbar" onKeyPress={this.enterHandler}>
          <input ref="user" className="chatbar-username" type='text' placeholder={this.props.currentUser.name} defaultValue={this.state.user} onKeyPress={this.userChanged}/>
          <input ref="content" className="chatbar-message" type='text' placeholder="Type a message and hit ENTER" onKeyPress={this.onEnterPressed}/>
        </footer>
      </div>
    );
  }
}
export default ChatBar;