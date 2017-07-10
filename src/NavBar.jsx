import React, {Component} from 'react';

//Navbar that shows a count of online users
class Navbar extends Component {
  render() {
    return (
    <nav className="navbar">
     <a href="/" className="navbar-brand">Chatty</a>
     <h2 className="count">Online Users: {this.props.count} </h2>
    </nav>
   );
  }
}
export default Navbar;