import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async () => {
    //асинхронні діспетчі
  }
);

export const counterSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase().addDefaultCase();
  },
});

export const { actions, reducer } = counterSlice;

export default counterSlice.reducer;
