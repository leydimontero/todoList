import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import TodoUpdate from './TodoUpdate';

const TodoItem = ({todo, handleDeleteTodo, handleCompleteTodo, handleUpdateTodo}) => {
    return (
       <li>
        <span
            onClick={() => handleCompleteTodo(todo.id)}
        >

            <label  className={`container-done ${todo.done ? 'active' : ''}`}></label>
        </span>
        <TodoUpdate todo={todo}  handleUpdateTodo={handleUpdateTodo}/>
        <button 
            className='btn-delete' 
            onClick={() => handleDeleteTodo(todo.id)}
        > 
            < FaTrashAlt/>
        </button>
       </li>
    );
};

export default TodoItem;