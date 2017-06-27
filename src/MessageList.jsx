import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
    <main className="messages">
      <div className="message">
        <div>
          <span className="message-username">Anonymous1</span></div>
          <span className="message-content">I won't be impressed with technology until I can download food.</span>
        </div>
      <div>
        <div className="message system">
        </div>
      </div>
    </main>
   );
  }
}
export default MessageList;