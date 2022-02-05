import { useState} from 'react'
import './App.css';
import {useDispatch} from 'react-redux';
import {addTodo, enterKeyAddTodo} from './store/todoSlice';
import InputFiled from './components/InputFiled';
import TodoList from './components/TodoList';
function App() {


  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
    setText("")
  }
  const addTaskKey = (e) => {
    if(e.key === 'Enter'){
      dispatch(enterKeyAddTodo({text}))
      setText("")
      }
  }


  const toggleTodoComploted = (todoId) => {
    // setTodo(todo.map(todo => {
    //   if(todo.id !== todoId) return todo;


    //   return {
    //     ...todo,
    //     completed: !todo.completed
    //   }
    // }))
  }






  return (
    <div className="App" > 
      <InputFiled 
          enterKey={addTaskKey} 
          setText={setText} 
          addTodo={addTask}
          text={text}
      />
      <TodoList/>
    </div>
  );
}

export default App;
