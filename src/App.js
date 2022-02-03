import {useState} from 'react'
import './App.css';

function App() {
  const [todo, setTodo] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if(text.trim().length){
      setTodo([...todo,{id:new Date().toISOString(), text, complete:false}])
      setText('')
    }
     
  }

  return (
    <div className="App">
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </label>
      <ul className="todo_item">
        {
          todo.map((todo) => <li key={todo.id}>
            <input type="checkbox" />
            <span>{todo.text}</span>
            <span style={{color:"red"}}>&times;</span>
          </li>)
        }
      </ul>
    </div>
  );
}

export default App;
