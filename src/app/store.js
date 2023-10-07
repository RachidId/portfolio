import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductSlice";
import functionsReducer from "../features/functionsSlice";

export const store = configureStore({
	reducer: {
		products: productReducer,
		functions: functionsReducer
	},
});