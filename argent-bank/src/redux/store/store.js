import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import loginSlice from './loginSlice'
import userSlice from './userSlice'

export const store = configureStore({
    reducer: {
      login: loginSlice,
      user: userSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat(thunk),
    devTools: true,
  })