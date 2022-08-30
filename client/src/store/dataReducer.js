import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const initialState = {
  trikers: [],
  favoriteTrikers: [],
  tickersError: "",
  newTime: "",
};
export const getData = createAsyncThunk(
  "addData, getData",
  async (_, { rejectWithValue, dispatch }) => {
    const socket = io.connect("http://localhost:4000");
    socket.emit("start");
    socket.on("ticker", (response) => {
      console.log(response)
      dispatch(addData(response));
    });
    socket.on('disconnect', () =>
    dispatch(tickersError('disconnect')),
  );
  })

export const Add = createSlice({
  name: "addData",
  initialState,
  reducers: {
    addData(state, action) {
      state.trikers.push(action.payload);
    },
    addFavoriteTrikers(state, action) {
      state.favoriteTrikers.push(action.payload);
      localStorage.setItem("tickers", JSON.stringify(state.favoriteTrikers));
    },
    upDate(state, action) {
      state.favoriteTrikers = action.payload;
    },
    tickersError(state, action) {
      state.tickersError = action.payload
    }
  },
});
export const { addData, addFavoriteTrikers, upDate, tickersError } = Add.actions;
export default Add.reducer;
