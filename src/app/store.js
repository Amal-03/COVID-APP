import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../reducers/CovidSlice";

export default configureStore({
  reducer: {
    covid: covidReducer,
  },
});
