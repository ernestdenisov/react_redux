import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../../actions/';
import '../App.css';

class TaskBar extends React.Component{

    render(){
        return (
            <div>
                <input type="text" ref="task" placeholder="hi"/>
                <button onClick={() => {
                    this.props.addTask(this.refs.task.value);                    
                    this.refs.task.value = '';
                }}>+</button>                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTask}, dispatch);
}

export default connect(() => {}, mapDispatchToProps)(TaskBar);