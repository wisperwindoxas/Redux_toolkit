import React from 'react';
import {useDispatch} from 'react-redux';
import{removeTodo} from '../store/todoSlice'
export default function TodoItem({id,text, completed, toggleTodoComploted }) {
   const dispatch = useDispatch()
  return(
     
        <li >
            <input 
            type="checkbox" checked={completed}  
            onChange={() => toggleTodoComploted(id)}
            
            />
            <span>{text}</span>
            <span onClick={(e) => dispatch(removeTodo({id}))} style={{color:"red"}}>&times;</span>
        </li>
      
  )
}
