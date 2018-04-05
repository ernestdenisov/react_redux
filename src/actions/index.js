export const addTask = (user_name) => {
    return {
        type : 'ADD_TASK',
        payload : user_name
    };
},
deleteTask = (taskId) => {
    return {
        type : 'DELETE_TASK',
        payload : taskId
    };
},
addContact = (user_info) => {
    return {
        type : 'ADD_CONTACT',
        payload : user_info
    };
},
editTask = (taskId) => {
    return {
        type : 'EDIT_TASK',
        payload : taskId
    };
}

export default {addTask, deleteTask, addContact, editTask};