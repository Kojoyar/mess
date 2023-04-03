import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
