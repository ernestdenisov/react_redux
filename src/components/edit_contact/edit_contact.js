import React from 'react';
import EditContactHeader from '../header/edit_contact_header';
import {deleteTask} from '../../actions/';
import {editTask} from '../../actions/';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../App.css';

const pattern = /^\w+([.-]\w+)*@\w+([.-]\w)*\.\w{2,4}$/;

class NewContact extends React.Component{
    render() {
        return (
            <div>
                <EditContactHeader />
                <div><input ref="user_name" placeholder='Piter Pen'/></div>
                <div><input ref="user_email" placeholder='Email'/></div>
                <button  
                    style={{
                        width : '80px',
                        height : '25px',
                        color : 'white',
                        backgroundColor : 'red',
                        border : '1px solid black',
                        borderRadius : '5px'
                    }}
                    onClick={() => {
                        document.getElementsByClassName('e_contact')[0].style.display = 'none';
                        this.props.deleteTask(this.props.id);
                        
                        this.refs.user_name.value = '';
                        this.refs.user_email.value = '';
                }}>Delete</button>
                <button 
                    style={{
                        width : '80px',
                        height : '25px',
                        backgroundColor : 'white',
                        border : '1px solid black',
                        borderRadius : '5px'
                    }}
                    onClick={() => {
                        document.getElementsByClassName('e_contact')[0].style.display = 'none';
                        
                        this.refs.user_name.value = '';
                        this.refs.user_email.value = '';
                }}>Cancel</button>
                <button style={{
                        width : '80px',
                        height : '25px',
                        color : 'white',
                        backgroundColor : 'rgb(122, 182, 72)',
                        border : '1px solid grey',
                        borderRadius : '5px'
                    }}
                    onClick={() => {
                        if (pattern.test(this.refs.user_email.value)) {
                            this.props.editTask({
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
    return bindActionCreators({deleteTask, editTask}, dispatch);
}

export default connect(() => {return {};}, mapDispatchToProps)(NewContact);