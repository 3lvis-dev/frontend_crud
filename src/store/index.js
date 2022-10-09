import { configureStore } from "@reduxjs/toolkit";
import getAllPersonSlice from './slices/getPerson.slice'

export default configureStore({
  reducer: {
    getAllPersonSlice
  }
})