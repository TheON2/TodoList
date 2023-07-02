import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  todos: [],
  hasMoreTodos:true,
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    loadTodos: (state, action) => {
      console.log(state.todos)
      state.todos = state.todos.concat(action.payload)
      state.hasMoreTodos = action.payload.length === 10
    },
    loadTodosWorking: (state, action) => {
      state.todos = state.todos.concat(action.payload)
      state.hasMoreTodos = action.payload.length === 10
    },
    loadTodosDone: (state, action) => {
      state.todos = state.todos.concat(action.payload)
      state.hasMoreTodos = action.payload.length === 10
    },
  },
})

export const {loadTodos,loadTodosWorking,loadTodosDone} = todosSlice.actions

export default todosSlice.reducer