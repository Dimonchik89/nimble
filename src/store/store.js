import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "./api/contactApi";

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
  devTools: import.meta.env.VITE_APP_NODE_ENV !== "production",
});

export default store;
