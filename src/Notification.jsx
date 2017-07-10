import React, { Component } from 'react';

//Italic message saying said user changed their username to.....
class Notification extends Component {
  render() {
    return (
      <div className="message system">
        <span>{this.props.oldUser} changed their name to {this.props.newUser}</span>
      </div>
    );
  }
}
export default Notification;