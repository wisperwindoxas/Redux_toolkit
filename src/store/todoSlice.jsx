import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const todoSlice = createSlice({
	name:'todos',
	
	initialState: {
		
		todos:[]

	} ,
	reducers:{
	 	async addTodo(state, action){
			state.todos.push({
				id:new Date().toISOString(),
				text:action.payload.text, 
				completed:false
			})
			
		},
		enterKeyAddTodo(state, action){
			state.todos.push({
				id:new Date().toISOString(),
				text:action.payload.text, 
				completed:false
			})
		},
		removeTodo(state, action){
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
		}, 
		toggleTodoComploted(state, action){
			const toogleTodo = state.todos.find(todo => todo.id === action.payload.id)
			toogleTodo.completed = !toogleTodo.completed
		}
		
	}
}) 



export const { addTodo, removeTodo, toggleTodoComploted, enterKeyAddTodo} = todoSlice.actions;
export default todoSlice.reducer;