import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "hooks/custom/api";
import { initializer } from "hooks/custom/storage";

export const charactersStarredSlice = createSlice({
  name: "charactersStarred",
  initialState: () => initializer<Character["id"][]>("charactersStarred", []),
  reducers: {
    add: (state, action: PayloadAction<Character["id"]>) => {
      const id = action.payload;
      if (!state.includes(id)) state.push(id);
    },
    remove: (state, action: PayloadAction<Character["id"]>) => {
      const id = action.payload;
      if (state.includes(id))
        return state.filter((characterId) => characterId !== id);
    },
    toggle: (state, action: PayloadAction<Character["id"]>) => {
      const id = action.payload;
      if (state.includes(id))
        return state.filter((characterId) => characterId !== id);
      state.push(id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, toggle } = charactersStarredSlice.actions;

export const charactersStarredReducer = charactersStarredSlice.reducer;
