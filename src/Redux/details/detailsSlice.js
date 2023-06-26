import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import uuid from 'react-uuid';

const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
export const getCardsDetails = createAsyncThunk(
  'cards/getCards',
  async (cardsType, thunkAPI) => {
    try {
      const resp = await axios.get(`${url}?type=${cardsType}`);
      return resp.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Somthing went wrong');
    }
  },
);

const initialState = {
  detailsList: [],
  isLoading: true,
  error: undefined,
};

const detailsSlice = createSlice({
  name: 'cards',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCardsDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCardsDetails.fulfilled, (state, action) => {
        const detailsList = [];
        action.payload.forEach((item) => {
          if (item.race) {
            const index = detailsList.findIndex((obj) => obj.race === item.race);
            if (index === -1) {
              detailsList.push({
                race: item.race, count: 1, raceId: item.type.replace(/\s+/g, '-'), raceKay: uuid(),
              });
            } else {
              detailsList[index].count += 1;
            }
            state.detailsList = detailsList.sort((a, b) => a.level - b.level);
          }
        });
        state.isLoading = false;
      })
      .addCase(getCardsDetails.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default detailsSlice.reducer;
