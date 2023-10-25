import { configureStore } from "@reduxjs/toolkit";
import userReduer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReduer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
