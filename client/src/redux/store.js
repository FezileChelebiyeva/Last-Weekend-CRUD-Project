import { configureStore } from '@reduxjs/toolkit'
import myDataSlice from './slice/dataSlice'

export const store = configureStore({
  reducer: {
    courses: myDataSlice
  },
})