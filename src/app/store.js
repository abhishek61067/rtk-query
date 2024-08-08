import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "../redux/api";
import { userSlice } from "../features/testSlice";

export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer, // Use the created `rootReducer` here to combine all
  },
  middleware: (defmid) => {
    // when we use rtk query, we have to manually  add it to our middleware chain
    return defmid().concat(myApi.middleware);
  },
});
