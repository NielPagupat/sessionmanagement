import { configureStore } from '@reduxjs/toolkit'
import credentialReducer from '../src/slice'

export default configureStore({
  reducer: {
    credentials: credentialReducer,
  },
})