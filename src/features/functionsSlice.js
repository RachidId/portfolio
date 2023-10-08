import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addingProd: false,
    editingProd: false,
    detailOrder: false
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
        toggleEdit: (state) =>  { 
            return {...state, detailOrder: !state.detailOrder}
        }
	},
});

export const { toggleAdd, toggleEdit } = functionsSlice.actions;

export default functionsSlice.reducer;