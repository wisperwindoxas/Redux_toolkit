import { useState} from 'react'
import './App.css';
import InputFiled from './components/InputFiled';
import TodoList from './components/TodoList';
function App() {
  const [todo, setTodo] = useState([])
  const [text, setText] = useState('')

  const removeTodo = (todoId) => {
    setTodo(todo.filter(item => item.id !== todoId))
  }

  const toggleTodoComploted = (todoId) => {
    setTodo(todo.map(todo => {
      if(todo.id !== todoId) return todo;


      return {
        ...todo,
        completed: !todo.completed
      }
    }))
  }

  const addTodo = (e) => {
    if(text.trim().length){
      setTodo([...todo,{id:new Date().toISOString(), text, completed:false}])
      setText('')
    }
     
 
  }

  const EnterKey = (e) => {
      if(e.key === 'Enter'){
        setTodo([...todo,{id:new Date().toISOString(), text, completed:false}])
        setText('')
      }
  }



  return (
    <div className="App" > 
      <InputFiled 
          enterKey={EnterKey} 
          setText={setText} 
          addTodo={addTodo}
          text={text}
      />
      <TodoList 
        todo={todo} 
        removeTodo={removeTodo} 
        toggleTodoComploted={toggleTodoComploted}
      />
    </div>
  );
}

export default App;
