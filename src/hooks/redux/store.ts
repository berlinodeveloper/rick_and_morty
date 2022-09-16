import { configureStore } from "@reduxjs/toolkit";
import { charactersStarredReducer } from "./charactersStarred";

const store = configureStore({
  reducer: {
    charactersStarred: charactersStarredReducer,
  },
});

store.subscribe(() =>
  localStorage.setItem(
    "charactersStarred",
    JSON.stringify(store.getState().charactersStarred)
  )
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
