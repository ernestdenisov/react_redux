import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask} from '../../actions/';
import {editTask} from '../../actions/';

class Task extends React.Component {

    render() {
        return (
            <tr>
                <td style={{
                        width : '300px',
                        float : 'left'
                    }} onClick={() => {
                    this.props.editTask(this.props.id);
                    document.getElementsByClassName('e_contact')[0].style.display = 'block'
                }}>
                    {this.props.user_name}
                </td>
                <td style={{
                        width : '80px',
                        float : 'right'
                    }} >
                    <button onClick={() => {
                        this.props.deleteTask(this.props.id);
                    }}>DELETE</button>
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteTask, editTask}, dispatch);
}

export default connect(() => {return {};}, mapDispatchToProps)(Task);