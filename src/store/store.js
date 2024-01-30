import { configureStore } from "@reduxjs/toolkit";
import { searchGitUserApi } from "./rtkQueryRequests";
import { userSearchSlice } from "./slice";

export const store = configureStore({
  reducer: {
    userSearchToolkit: userSearchSlice.reducer,
    [searchGitUserApi.reducerPath]: searchGitUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchGitUserApi.middleware),
});
