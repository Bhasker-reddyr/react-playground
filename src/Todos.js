import React from 'react';
import './Todos.css'
import { ACTIONS } from './App.js'

function Todos({ todo, dispatch }) {
    return (
        <div className='todoWrapper'>
            <span style={{ color: todo.completed ? "#aaa" : "#000" }}>
                {todo.name}
            </span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </div>
    );
}

export default Todos;