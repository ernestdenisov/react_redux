import React, { Component } from 'react';
import Header from './components/header';
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