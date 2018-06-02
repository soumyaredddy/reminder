import React ,{Component} from 'react';
// import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {addreminder,deletereminder} from './actions';
// import {reminders} from './reducers';

// import {bindActionCreators} from 'redux';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text :'',
            duedate:''
        }
    
    }
        addreminder(){
            console.log('this.state.duedate',this.state.duedate);
            this.props.addreminder(this.state.text,this.state.duedate);
             //console.log('this.state.duedate',this.state.duedate);
             //console.log('this',this);
        }
        deletereminder(id){
            this.props.deletereminder(id);
        //   console.log('deleteing in application',id);
        //   console.log('this.props',this.props);

        }
        renderReminders()
            {
                return(
                    <ul>
                        {
                             this.props.reminder.map(reminder =>{''
                       
                                return(
                                    <li key = {reminder.id} >
                                    {reminder.text}
                                    {reminder.duedate}
                                    <div className="list-item delete-button"
        onClick = {()=>this.deletereminder(reminder.id)}
        >&#x2715;</div>
                                    </li> 
                                );
                            })
                        }
                 
                    </ul>
                )
           
            }

        
    
    render(){
        console.log('this.props',this.props);
        return(
        <div className="App">
         <div className = "title">
         remainder app</div>
         <div className = "form-inline"> 
         <div className = "form-group">
         <input className = "form-control"
         placeholder = "add your reminder here"
         onChange = {event=>this.setState({text:event.target.value})} 
         />
         <input className = "form-control"
         type = "datetime-local"
         onChange = {event =>this.setState({duedate:event.target.value})}
         />
         </div>
         <button type = "button"
             className ="btn-btn-success"
             onClick ={()=>this.addreminder()}
             >
             add reminder
             </button>

               {this.renderReminders()}
        
         </div>
     </div>
        )
    }
}
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addreminder},dispatch);
// }
// export default connect(null,mapDispatchToProps)(App);
function mapStateToProps(state){
     console.log('state',state);
    return{
        reminder:state
    }
}
export default connect(mapStateToProps,{addreminder,deletereminder})(App);