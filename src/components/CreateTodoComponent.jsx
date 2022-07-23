

import React, { Component } from 'react';
import TodoService from '../services/TodoService';

class CreateTodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
           userId:'',
           id:'',
           title:'',
           body:''
        }
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.saveOrUpdateTodo = this.saveOrUpdateTodo.bind(this);
    }

    
    componentDidMount(){

      
        if(this.state.id === '_add'){
            return
        }else{
            TodoService.getTodoById(this.state.id).then( (res) =>{
                let todo = res.data;
                this.setState({usedId: todo.userId,
                    title: todo.title,
                    body: todo.body
                });
            });
        }        
    }
    saveOrUpdateTodo = (e) => {
        e.preventDefault();
        let todo = {userId: this.state.userId, title: this.state.title, body: this.state.body};
        console.log('todo => ' + JSON.stringify(todo));

        
        if(this.state.id === '_add'){
            TodoService.createTodo(todo).then(res =>{
                this.props.history.push('/todos');
            });
        }else{
            TodoService.updateTodo(todo, this.state.id).then( res => {
                this.props.history.push('/todos');
            });
        }
    }
    
    changeUserIdHandler= (event) => {
        this.setState({userId: event.target.value});
    }

    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeBodyHandler= (event) => {
        this.setState({body: event.target.value});
    }

    cancel(){
        this.props.history.push('/todos');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Todo</h3>
        }else{
            return <h3 className="text-center">Update Todo</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> User Id: </label>
                                            <input placeholder="UserId" name="userId" className="form-control" 
                                                value={this.state.userId} onChange={this.changeUserIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Body: </label>
                                            <input placeholder="Body" name="body" className="form-control" 
                                                value={this.state.body} onChange={this.changeBodyHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateTodo}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateTodoComponent();

