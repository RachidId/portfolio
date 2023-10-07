import { createSlice } from "@reduxjs/toolkit";

import {v4} from 'uuid'
const initialState = {
	products: [{
        id: v4(),
        name: 'product 1',
        category: 'category 1',
        quantity: 200,
        price: 1000,
        status: 'live'
    },
    {
        id: v4(),
        name: 'product 2',
        category: 'category 2',
        quantity: 100,
        price: 2000,
        status: 'no-stock'
    }
],
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		add: (state, action) =>  { 
            [...state, action.payload]
        }
	},
});

export const { add } = productSlice.actions;

export default productSlice.reducer;