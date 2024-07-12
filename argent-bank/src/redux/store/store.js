import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import loginSlice from './loginSlice'

export const store = configureStore({
    reducer: {
      login: loginSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat(thunk),
    devTools: true,
  })