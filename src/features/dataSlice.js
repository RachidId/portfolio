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
    orders:[
        {
            id: v4(),
            customerName: 'customer 1',
            date: '11/10/2022',
            amount: 200,
            status: 'new'
        },
    ] 
};

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		add: (state, action) =>  { 
            [...state, action.payload]
        }
	},
});

export const { add } = dataSlice.actions;

export default dataSlice.reducer;