import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import uuid from 'react-uuid';

const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
export const getTypes = createAsyncThunk(
  'types/getTypes',
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
  typesList: [],
  isLoading: true,
  error: undefined,
};

const typesSlice = createSlice({
  name: 'types',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTypes.fulfilled, (state, action) => {
        const typesList = [];
        action.payload.forEach((item) => {
          const index = typesList.findIndex((obj) => obj.type === item.type);
          if (index === -1) {
            typesList.push({
              type: item.type, count: 1, typeId: item.type.replace(/\s+/g, '-'), typeKey: uuid(),
            });
          } else {
            typesList[index].count += 1;
          }
        });
        state.typesList = typesList;
        state.isLoading = false;
      })
      .addCase(getTypes.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default typesSlice.reducer;
