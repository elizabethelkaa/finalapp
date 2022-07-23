import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewTodoComponent from './components/ViewTodoComponent';
import CreateTodoComponent from './components/CreateTodoComponent';
import { useEffect } from 'react';


function App() {
  return (
    <div>
        <Router>
          <HeaderComponent/>
              <div className="container">
                    <Switch> 
                          <Route path = "/add-todo/:id" component = {CreateTodoComponent}></Route>
                          <Route path = "/" component = {ViewTodoComponent}></Route>
                   </Switch>
                </div>
           <FooterComponent/>
        </Router>
    </div>
    
  );
};

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
    setTodos(result.data);
  });
}, []); 

  <div>
    {todos ? (
      <TodoList todos={todos} onUpdateTodo={onUpdateTodo} />
    ) : (
      <Loading />
    )}
  </div>



export default App;

