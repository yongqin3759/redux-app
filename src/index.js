import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import noteReducer, { appendNote } from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
import noteService from './services/notes'

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})


console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
