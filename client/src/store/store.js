import { configureStore } from "@reduxjs/toolkit";
import AddReducer from "./dataReducer";

export const store = configureStore({
  reducer: {
    add: AddReducer,
  },
});
