import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import functionsReducer from "../features/functionsSlice";

export const store = configureStore({
	reducer: {
		data: dataReducer,
		functions: functionsReducer
	},
});