import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
  allCompaniesLoadingStatus: "idle",
  allCityCompanies: [],
};

export const allCompaniesFetch = createAsyncThunk(
  "infographic/allCompaniesFetch",
  async () => {
    const { request } = useHttp();
    return await request("http://168.119.50.224:3001/cityCompanies");
  }
);

const infoSlice = createSlice({
  name: "infographic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allCompaniesFetch.pending, (state) => {
        state.allCompaniesLoadingStatus = "loading";
      })
      .addCase(allCompaniesFetch.fulfilled, (state, action) => {
        state.allCompaniesLoadingStatus = "idle";
        state.allCityCompanies = action.payload;
      })
      .addCase(allCompaniesFetch.rejected, (state) => {
        state.allCompaniesLoadingStatus = "error";
      });
  },
});

const { actions, reducer } = infoSlice;

export default reducer;
