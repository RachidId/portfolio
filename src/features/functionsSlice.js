import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addingProd: false,
    editingProd: false
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
        }
	},
});

export const { toggleAdd, toggleEdit } = functionsSlice.actions;

export default functionsSlice.reducer;