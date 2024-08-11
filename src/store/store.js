import { configure } from "@testing-library/react";
import watchlistSliceReducer from "./watchlistSlice";
import { configureStore } from "@reduxjs/toolkit";
import watchlistSlice from "./watchlistSlice";

export const store = configureStore({
    reducer: {
        watchlistSlice : watchlistSliceReducer,
    },
});