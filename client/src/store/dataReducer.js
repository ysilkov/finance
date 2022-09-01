import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const initialState = {
  tickers: [],
  favoriteTickers: [],
  tickersError: "",
  newTime: "",
};
export const getData = createAsyncThunk(
  "addData, getData",
  async (_, { rejectWithValue, dispatch }) => {
    const socket = await io.connect("http://localhost:4000");
    socket.emit("start");
    socket.on("ticker", (response) => {
      dispatch(addData(response));
    });
    socket.on("disconnect", () => dispatch(tickersError("disconnect")));
  }
);

export const Add = createSlice({
  name: "addData",
  initialState,
  reducers: {
    addData(state, action) {
      state.tickers.push(action.payload);
    },
    addFavoriteTickers(state, action) {
      state.favoriteTickers.push(action.payload);
      localStorage.setItem("tickers", JSON.stringify(state.favoriteTickers));
    },
    upDate(state, action) {
      state.favoriteTickers = action.payload;
    },
    tickersError(state, action) {
      state.tickersError = action.payload;
    },
  },
});
export const { addData, addFavoriteTickers, upDate, tickersError } =
  Add.actions;
export default Add.reducer;
