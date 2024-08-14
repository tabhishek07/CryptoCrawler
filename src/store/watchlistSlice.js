import { createSlice } from "@reduxjs/toolkit";
// import Watchlist from "../src/pages/Watchlist";

const watchlistSlice = createSlice({
  name: "watchlistSlice",
  initialState: [],

  reducers: {
    addCoins(state, action) {
     const newState = [...state]; // cloning state for updation never directly upde state first make a comp
     newState.push(action.payload);  // pushing action
 
     return newState // returning data
    },

    removeCoins(state, action){
      const index = (element, array) => array.findIndex(obj => JSON.stringify(obj) === JSON.stringify(element));

      const indexofRemovedCoin = index(action.payload , state);

      if(indexofRemovedCoin != -1){
        state.splice(indexofRemovedCoin, 1)
      }

    },
  },
});

export const {  addCoins, removeCoins} = watchlistSlice.actions;
export default  watchlistSlice.reducer;
