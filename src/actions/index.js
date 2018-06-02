import {add_reminder,delete_reminder} from '../constants';

export const addreminder = (text,duedate) => {
    const action = {
        type : add_reminder,
        text,
        duedate
    }
    console.log('action in add reminder',action);
    return action;
}
    export const deletereminder = (id) => {
        const action = {
            type : delete_reminder,
            id
        }
    console.log('action in delete reminder',action);
    return action;
}