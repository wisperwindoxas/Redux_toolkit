import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todo, removeTodo, toggleTodoComploted }) {
    return (
        <ul>
            {todo.map(todo => <TodoItem 
            removeTodo={removeTodo} 
            toggleTodoComploted={toggleTodoComploted}
            key={todo.id}  
            {...todo} />)}
        </ul>
    )
}
