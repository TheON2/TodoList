import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    loadTodos: (state, action) => {
      state.todos.todos = state.todos.todos.concat(action.payload)
    },
    loadTodosWorking: (state, action) => {
      state.todos.todos = state.todos.todos.concat(action.payload)
    },
    loadTodosDone: (state, action) => {
      state.todos.todos = state.todos.todos.concat(action.payload)
    },
  },
})

export const {loadTodos,loadTodosWorking,loadTodosDone} = todosSlice.actions

export default todosSlice.reducer