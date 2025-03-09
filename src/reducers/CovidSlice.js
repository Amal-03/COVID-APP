import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { statesOfIndia } from "../constants/coordinates";

export const fetchCovidData = createAsyncThunk(
  "covid/fetchCovidData",
  async () => {
    const response = await axios.get(
      "https://api.rootnet.in/covid19-in/stats/latest"
    );
    return response.data;
  }
);

const covidSlice = createSlice({
  name: "covid",
  initialState: {
    data: null,
    dataWithCoordinates: null,
    status: "idle",
    error: null,
    selectedState: null,
  },
  reducers: {
    setSelectedState: (state, action) => {
      state.selectedState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCovidData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCovidData.fulfilled, (state, action) => {
        state.status = "succeeded";

        const newData = action.payload.data.regional.map((item1) => {
          const match = statesOfIndia.find((item2) => item1.loc === item2.loc);
          return { ...item1, ...match };
        });

        state.data = action.payload;
        state.dataWithCoordinates = newData;
      })
      .addCase(fetchCovidData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSelectedState } = covidSlice.actions;
export default covidSlice.reducer;
