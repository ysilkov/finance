import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

export const getData = createAsyncThunk(
  "addData/getData",
  async (_, { rejectWithValue, dispatch })=>{
    const socket = await io.connect("http://localhost:4000");
    socket.emit("start");
    socket.on("ticker", (response) =>{
      dispatch(addData(response))
    });
  
  }
)
export const Add = createSlice({
  name: "addData",
  initialState: {
  trikers: [],
  loading: false,
    error: null,
  },
  reducers: {
    addData(state, action) {
        state.trikers.push(action.payload);
    },
  },
 /*  extraReducers:{
    [getData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [getData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }, */
});
const {addData} = Add.actions;
export default Add.reducer;
