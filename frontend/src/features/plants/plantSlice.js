import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import plantService from "./plantService";

const initialState = {
  plants: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//get the plants
export const getPlants = createAsyncThunk(
  "plants/fetching",
  async (thunkAPI) => {
    try {
      return await plantService.getPlants();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const plantSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPlants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.plants = action.payload;
      })
      .addCase(getPlants.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.plants = null;
      });
  },
});

export const { reset } = plantSlice.actions;
export default plantSlice.reducer;
