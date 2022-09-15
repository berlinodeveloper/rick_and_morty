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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
