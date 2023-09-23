import { configureStore } from '@reduxjs/toolkit'
import indexReducer from './index'

export const store = configureStore({
  reducer: {
    index: indexReducer
  },
})