// import { useState } from 'react'
import './App.css';
import TodoItem from './TodoItem';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <form className="todos-form">
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" />
        <button>+</button>
      </form>
      <div className="todos-container">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </>
  );
}

export default App;
