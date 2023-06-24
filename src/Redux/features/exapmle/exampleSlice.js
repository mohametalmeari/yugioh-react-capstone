import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myVar: [],
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    addElement: (state, { payload }) => {
      state.myVar.push({
        firstName: payload.firstName,
        lastName: payload.lastName,
      });
    },
  },
});

export const { addElement } = exampleSlice.actions;

export default exampleSlice.reducer;
