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
    addName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { addName } = nameSlice.actions;

export default nameSlice.reducer;
