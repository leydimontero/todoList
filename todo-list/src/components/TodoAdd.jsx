import React from 'react';

const TodoAdd = () => {
    return (
        <form>
            <input 
            type="text" 
            className='input-add' 
            name='description' 
            // value='Aprender AWS'  
            placeholder='¿Qué quieres hacer?'
            
        />

        <button className='btn-add' type='submit'>Agregar</button>
        </form>
    );
};

export default TodoAdd;