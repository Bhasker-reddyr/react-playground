import React, { useReducer, useState } from 'react';
import './App.css';
import Todos from './Todos';
export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
}
function App() {
  const [name, setName] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])

  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload)]
      case ACTIONS.TOGGLE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed }
          }
          return todo
        })
      case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id)
      default:
        return todos
    }
  }

  function newTodo(payload) {
    return { id: new Date(), name: payload.name, completed: false }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName('')
  }
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
        </form>
      </div>
      <hr />
      {todos.map((todo => {
        return <Todos key={todo.id} todo={todo} dispatch={dispatch} />
      }))
      }
    </>
  );
}

export default App;
