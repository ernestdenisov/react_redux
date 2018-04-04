import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../../actions/';
import TaskList from '../tasklist';

const divStyle = {
    border: '1px solid black'
  }

class TaskBar extends React.Component{
    
    render(){
        return (
            
            <div>
                <input type="text" ref="task" placeholder="hi"/>

                <div style={divStyle} className='list-add'>
                    <TaskList />
                    <button onClick={() => {
                        this.props.addTask(this.refs.task.value);
                        this.refs.task.value = '';
                    }}>+</button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTask}, dispatch);
}

export default connect(() => {}, mapDispatchToProps)(TaskBar);