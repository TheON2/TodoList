import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  todos: [],
  hasMoreTodos:true,
  viewMode:1,
  viewMethod:1,
  page:1,
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
    loadTodosPaging: (state, action) => {
      console.log(state.todos)
      state.todos = action.payload.todos
      state.page = action.payload.pageNum
    },
    loadTodosWorkingPaging: (state, action) => {
      state.todos = action.payload.todos
      state.page = action.payload.pageNum
    },
    loadTodosDonePaging: (state, action) => {
      state.todos = action.payload.todos
      state.page = action.payload.pageNum
    },
    resetTodos: (state, action) => {
      state.todos = []
      state.hasMoreTodos=true
      state.viewMode=1
      state.viewMethod=1
    },
    changeViewMode: (state, action) => {
      state.todos = []
      state.viewMode = action.payload
      state.hasMoreTodos=true
    },
    changeViewMethod: (state, action) => {
      state.todos = []
      state.viewMethod = action.payload
      state.hasMoreTodos=true
    },
  },
})

export const {loadTodos,loadTodosWorking,loadTodosDone,resetTodos,loadTodosWorkingPaging,loadTodosDonePaging,loadTodosPaging ,changeViewMethod ,changeViewMode} = todosSlice.actions

export default todosSlice.reducer