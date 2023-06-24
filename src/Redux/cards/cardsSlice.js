import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
export const getCards = createAsyncThunk(
  'cards/getCards',
  async (thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Somthing went wrong');
    }
  },
);

const initialState = {
  cardsList: [],
  isLoading: true,
  error: undefined,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addElement: (state, { payload }) => {
      state.myVar.push({
        firstName: payload.firstName,
        lastName: payload.lastName,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cardsList = action.payload;
        console.log('cardsList:');
        console.log(state.cardsList);
        console.log('length:');
        console.log(state.cardsList.length);
      })
      .addCase(getCards.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { addElement } = cardsSlice.actions;

export default cardsSlice.reducer;
