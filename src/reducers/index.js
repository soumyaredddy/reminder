import {add_reminder,delete_reminder} from '../constants';
const reminder = (action)=>{
    let {text,duedate} = action;
    return{
        //text = action.text        
        id:Math.random(),
         text ,
         duedate        
    }
}
const removebyid = (state =[],id)=>{
    const reminders = state.filter(reminder =>reminder.id!==id);
    console.log('new reduced reminders',reminders);
    return reminders;
}
const reminders = (state=[],action)=>{
    let reminders = null;
    switch(action.type){
        case add_reminder:
        reminders = [...state,reminder(action)];
        console.log('reminders as state',reminders);
        return reminders;
        case delete_reminder:
        reminders = removebyid(state,action.id);
        return reminders;
default:
return state    }
}
export default reminders; 