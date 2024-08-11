import { createSlice } from "@reduxjs/toolkit";
// import Watchlist from "../src/pages/Watchlist";

const watchlistSlice = createSlice({
  name: "watchlistSlice",
  initialState: [],

  reducers: {
    addCoins(state, action) {
     const newState = [...state];
     newState.push(action.payload);

     return newState
    },

    removeCoins(state, action){
        console.log(state, action);
    },
  },
});

export const {  addCoins, removeCoins} = watchlistSlice.actions;
export default  watchlistSlice.reducer;
