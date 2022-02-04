import React from 'react';

export default function TodoItem({id,text, completed, removeTodo, toggleTodoComploted }) {
  return(
    
        <li >
            <input 
            type="checkbox" checked={completed}  
            onChange={() => toggleTodoComploted(id)}
            
            />
            <span>{text}</span>
            <span onClick={(e) => removeTodo(id)} style={{color:"red"}}>&times;</span>
        </li>
      
  )
}
