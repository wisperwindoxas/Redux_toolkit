import { useState} from 'react'
import './App.css';
import {useDispatch} from 'react-redux';
import {addTodo, removeTodo} from './store/todoSlice';
import InputFiled from './components/InputFiled';
import TodoList from './components/TodoList';
function App() {


  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
    setText("")
  }



  const removeTodo = (todoId) => {
    // setTodo(todo.filter(item => item.id !== todoId))
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



  const EnterKey = (e) => {
      // if(e.key === 'Enter'){
      //   setTodo([...todo,{id:new Date().toISOString(), text, completed:false}])
      //   setText('')
      // }
  }



  return (
    <div className="App" > 
      <InputFiled 
          enterKey={EnterKey} 
          setText={setText} 
          addTodo={addTask}
          text={text}
      />
      <TodoList/>
    </div>
  );
}

export default App;
