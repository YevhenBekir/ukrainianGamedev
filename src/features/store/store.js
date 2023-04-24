import { configureStore } from "@reduxjs/toolkit";
import companies from "../../components/selectRegion/regionSlice";
import infographic from "../../components/companiesStats/infoSlice";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: { companies, infographic },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
