import { configureStore } from "@reduxjs/toolkit";
import fetchStatusSlice from "./fetchStatusSlice";
import itemsSlice from "./itemsSlice";


const myStore = configureStore({
  reducer : {
    fetchStatus : fetchStatusSlice.reducer,
    item: itemsSlice.reducer,
  }
});

export default myStore;