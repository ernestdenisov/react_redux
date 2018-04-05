import React from 'react';
import EditContactHeader from '../header/edit_contact_header';
import {deleteTask} from '../../actions/';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class NewContact extends React.Component{
    render() {
        return (
            <div>
                <EditContactHeader />
                <div><input placeholder='Piter Pen'/></div>
                <div><input placeholder='Email'/></div>
                <button onClick={() => {
                    document.getElementsByClassName('e_contact')[0].style.display = 'none';
                    
                    console.log(this)
                    this.props.deleteTask(this.props.id);
                }}>Delete</button>
                <button onClick={() => {
                    document.getElementsByClassName('e_contact')[0].style.display = 'none';
                }}>Cancel</button>
                <button onClick={() => {
                    document.getElementsByClassName('e_contact')[0].style.display = 'none';
                }}>Ok</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteTask}, dispatch);
}

export default connect(() => {return {};}, mapDispatchToProps)(NewContact);