import React from 'react';

export default function InputFiled({enterKey, setText, addTodo, text}) {
  return(
        <label >
            <input 
            onKeyDown={(e) => enterKey(e)}  value={text} 
            onChange={(e) => setText(e.target.value)} 
        
            />
            <button   onClick={addTodo}>Add Todo</button>
    </label>  
    )
}
