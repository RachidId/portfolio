import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addingProd: false,
    editingProd: false,
    detailOrder: false,
    totalEarning:false
};

export const functionsSlice = createSlice({
	name: "functions",
	initialState,
	reducers: {
		toggleAdd: (state) =>  { 
            return {...state, addingProd: !state.addingProd}
        },
		toggleEdit: (state) =>  { 
            return {...state, editingProd: !state.editingProd}
        },
        toggledetailOrder: (state) =>  { 
            return {...state, detailOrder: !state.detailOrder}
        },
        toggletotalEarning: (state) =>  { 
            return {...state, totalEarning: !state.totalEarning}
        }
	},
});

export const { toggleAdd, toggleEdit } = functionsSlice.actions;

export default functionsSlice.reducer;