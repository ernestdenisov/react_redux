import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../../actions/';
import TaskList from '../tasklist';

class TaskBar extends React.Component{

    render(){
        return (
            <div>
                <input type="text" ref="task" placeholder="hi"/>
                <TaskList />
                <button onClick={() => this.props.addTask(this.refs.task.value)}>+</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTask}, dispatch);
}

export default connect(() => {}, mapDispatchToProps)(TaskBar);