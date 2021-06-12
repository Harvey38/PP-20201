import React, { Component } from 'react'

export default class Todo extends Component {
    constructor()
    {
        super();
        this.state={
            tasks:[{id:1,txt:'First task'},{id:2,txt:'Second Task'},
            {id:3,txt:'Third Task'}],
           
        }
       
    }
  
    handleClick=(task)=>{
       
        let nta = [...this.state.tasks,
            {id:this.state.tasks.length+1,txt:task}];
        this.setState({
            tasks:nta
        })
       
    }
    onDelete =(id)=>{
        let nta = this.state.tasks.filter(obj=>{
            return obj.id!=id
        })
        this.setState({
            tasks:nta
        })

    }
    render() {

        return (
            <>
            <InputComponent  handleClick={this.handleClick} />
            <TaskList tasks={this.state.tasks} 
            onDelete={this.onDelete} />
            </>
        )
    }
}

class InputComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            currTask:''
        }
    }
    handleChange=(e)=>{
        this.setState({currTask:e.target.value})
    }
    render() {
        return (
            <div className='input-container'>
            <input  type='text' value={this.state.currTask}
             onChange={this.handleChange} ></input>
             {
                 this.state.currTask ?
            <button onClick={()=>{
                this.props.handleClick(this.state.currTask);
                this.setState({currTask:''})
            }} >
                Add</button>:<></>
    }
       </div>
        )
    }
}
class TaskList extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div className='class-list'>
                <ul>
                    { 
                        this.props.tasks.map(task=>(
                            <li key={task.id}>
                                <h1>{task.txt}</h1>
                                <button 
  onClick={()=>this.props.onDelete(task.id)} >Delete</button>
                            </li>
        ))
                    }
                </ul>    
            </div>      
        )
    }
}



