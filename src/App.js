import React, { useState } from 'react';
import './App.css';
function App() {
const [count, setCount] = useState(0)
function increment(){
  setCount(prev=> prev+1)
}
function decrement(){
  setCount(prev=> prev-1)
}
return (
    <div className='flex justify-center gap-3 my-10'>
    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
     onClick={increment}>+</button>
    <span className='py-2'>{count} </span>
    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
     onClick={decrement}>-</button>
    </div>
  );
}

export default App;
