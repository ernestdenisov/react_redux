import React from 'react';
import {connect} from 'react-redux';
import Task from '../task/';

class TaskList extends React.Component{

    render() {
        return(
            <table>
                <tbody>
                    {this.props.user_names.map((user_name, index) => {
                        if (index % 2 == 0) {
                            return <div style={{
                                backgroundColor : '#eeeeee',
                                width : '400px'
                            }}><Task id={index} user_name={user_name} /></div>
                        }
                        return <div><Task id={index} user_name={user_name} /></div>
                })}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {
        user_names : state.user_names
    }
}

export default connect(mapStateToProps)(TaskList);