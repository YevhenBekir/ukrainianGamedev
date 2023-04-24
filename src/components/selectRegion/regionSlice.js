import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useCompaniesRequest from "../../services/useCompaniesRequest";

const initialState = {
  cityCompanies: [],
  companiesLoadingStatus: "idle",
  activeCompany: {},
};

export const companiesFetch = createAsyncThunk(
  "companies/companiesFetch",
  async (id) => {
    const { getCompanies } = useCompaniesRequest();
    return await getCompanies(id);
  }
);

const regionSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setActiveCompany: (state, action) => {
      state.companiesLoadingStatus = "idle";
      state.activeCompany = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(companiesFetch.pending, (state) => {
        state.companiesLoadingStatus = "loading";
      })
      .addCase(companiesFetch.fulfilled, (state, action) => {
        state.companiesLoadingStatus = "idle";
        state.cityCompanies = action.payload;
        state.activeCompany = action.payload[0];
      })
      .addCase(companiesFetch.rejected, (state) => {
        state.companiesLoadingStatus = "error";
      });
  },
});

const { actions, reducer } = regionSlice;

export default reducer;
export const { setActiveCompany } = actions;
