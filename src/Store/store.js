import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice"; 

const store = configureStore({
  reducer: {
    dataStore: DataSlice,
  }
})

export default store
