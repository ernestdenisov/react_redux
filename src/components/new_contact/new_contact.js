import React from 'react';
import NewContactHeader from '../header/new_contact_header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addContact} from '../../actions/';

const pattern = /^\w+([.-]\w+)*@\w+([.-]\w)*\.\w{2,4}$/;

class NewContact extends React.Component{
    render() {
        return (
            <div>
                <NewContactHeader />
                <div><input type="text" ref="user_name" placeholder='Name'/></div>
                <div><input type="text" ref="user_email" placeholder='Email'/></div>
                <button onClick={() => {           
                    this.refs.user_name.value = '';
                    this.refs.user_email.value = '';
                    document.getElementsByClassName('n_contact')[0].style.display = 'none';
                }}>Cancel</button>
                <button onClick={() => {
                    if (pattern.test(this.refs.user_email.value)) {
                        this.props.addContact({
                            user_name : this.refs.user_name.value,
                            user_email : this.refs.user_email.value
                        })                  
                        this.refs.user_name.value = '';
                        this.refs.user_email.value = '';
                        document.getElementsByClassName('n_contact')[0].style.display = 'none';
                    } else {
                        alert('wrong email');
                    }
                    
                }}>Ok</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addContact}, dispatch);
}

export default connect(() => {}, mapDispatchToProps)(NewContact);