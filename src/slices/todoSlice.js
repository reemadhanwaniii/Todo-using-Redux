import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state,action) => {
        state.push({id: action.payload.id, title: action.payload.title})
        /**
         * here we can return new state object as we previously do we treat them as immutable so we used to return a brand new one
         * but what redux toolkit says we don't always need to return new state object
         *  it allows us to return same state object internally it uses library called immer JS
         * 
         */
    },
    removeTodo: (state,action) => {
        state = state.filter((todo)=> todo.id !== action.payload)
    },
    editTodo: (state,action) => {
        state = state.map((todo) => {
            if(todo.id === action.payload.id) 
                todo.title = action.payload.title;
            return todo;
        });
    }
  }
});

export default todoSlice;

console.log(todoSlice.actions);
console.log(todoSlice.reducer)