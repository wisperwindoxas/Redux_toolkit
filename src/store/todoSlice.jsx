import {createSlice} from '@reduxjs/toolkit'


const todoSlice = createSlice({
	name:'todos',
	initialState: {
		todos:[]
	} ,
	reducers:{
		addTodo(state, action){
			state.todos.push({
				id:new Date().toISOString(),
				text:action.payload.text, 
				completed:false
			})
		},
		removeTodo(state, action){
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
		}, 
		toggleTodoComploted(){}
	}
}) 


export const { addTodo, removeTodo, toggleTodoComploted} = todoSlice.actions;
export default todoSlice.reducer;