import React, { Component } from 'react';
import Header from './components/header';
import TaskBar from './components/taskbar';
import TaskList from './components/tasklist';
import NewContact from './components/new_contact/new_contact.js';
import EditContact from './components/edit_contact/edit_contact.js';

const contact_styles = {
  display : 'none'
}

class App extends Component {
  render() {
    return (
      <div>
        <div className='n_contact' style={contact_styles}>
          <NewContact />          
        </div>

        <div className='e_contact' style={contact_styles}>
          <EditContact />
        </div>
        
        <Header />
        <TaskList />
        <button onClick={() => {
          document.getElementsByClassName('n_contact')[0].style.display = 'block';
          return <NewContact />
        }}>+</button>
      </div>
    )
  }
}

export default App;

//

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
