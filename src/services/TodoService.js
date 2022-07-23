
import axios from 'axios';

const TODO_API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

class TodoService {

    getTodos(){
        return axios.get(TODO_API_BASE_URL);
    }

    createTodo(todo){
        return axios.post(TODO_API_BASE_URL, todo);
    }

    getTodoById(userId){
        return axios.get(TODO_API_BASE_URL + '/' + userId);
    }

    updateTodo(todo, userId){
        return axios.put(TODO_API_BASE_URL + '/' + userId, todo);
    }

    deleteTodo(userId){
        return axios.delete(TODO_API_BASE_URL + '/' + userId);
    }
}

export default new TodoService();

