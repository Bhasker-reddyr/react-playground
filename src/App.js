import React, { useReducer } from 'react';
import './App.css';
function App() {

  const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
  }

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 }
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  
  return (
    <div className='flex justify-center gap-3 my-10'>
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        onClick={increment}>+</button>
      <span className='py-2'>{state.count} </span>
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        onClick={decrement}>-</button>
    </div>
  );
}

export default App;
