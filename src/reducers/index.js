import {combineReducers} from 'redux';

const taskReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            state = state.concat(action.payload);
            break;
        case 'ADD_CONTACT':
            console.log(action);
            state = state.concat(action.payload.user_name + '\n' + action.payload.user_email);
            break;
        case 'DELETE_TASK':
            state = state.slice();
            state.splice(action.payload, 1);
            break;
        case 'EDIT_TASK':            
            break;
        default :
            break;
    }
    return state;
},
reducers = combineReducers({
    user_names : taskReducer
});

export default reducers;