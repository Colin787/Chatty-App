import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              <nav className="navbar">
                <div className="navbar-brand">Chatty</div>
              </nav>
              <p><span className="message-username">Anon</span> random dhf asd  fas f afs  sf a fs f a sfa f sa f </p>
            </div>
          </div>
         <div className="chatbar">
            <input type="text" className="chatbar-username" placeholder="Your Name (Optional)"/>
            <input type="text" className="chatbar-message" placeholder="Type a message and hit ENTER"/>
         </div>
        </div>
      </div>


    )
  }
}

export default App;

