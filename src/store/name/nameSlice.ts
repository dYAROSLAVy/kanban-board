import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type NameState = {
  value: string;
};

const initialState: NameState = {
  value: "Anonymous",
};

export const nameSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<{ user: string }>) => {
      const { user } = action.payload;
      state.value = user;
    },
  },
});

export const { addName } = nameSlice.actions;

export default nameSlice.reducer;
