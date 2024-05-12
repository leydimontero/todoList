import React from 'react';
import { useForm } from '../hooks/useForm';

const TodoAdd = ({ handleNewTodo }) => {

    const {description, onInputChange, onResetForm} = useForm({
        description: '',
    })

    const onFormSumint = e => {
        e.preventDefault();

        if (description.length <= 1 ) return

        let newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        handleNewTodo(newTodo)
        onResetForm()
    }

    return (
        <form onSubmit={onFormSumint}>
            <input 
            type="text" 
            className='input-add' 
            name='description' 
            value={description}  
            onChange={onInputChange}
            placeholder='¿Qué quieres hacer?'
            
        />

        <button className='btn-add' type='submit'>Agregar</button>
        </form>
    );
};

export default TodoAdd;