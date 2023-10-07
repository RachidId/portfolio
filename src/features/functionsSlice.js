import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	functions: {
        addingProd: false,
        editingProd: false
    }
};

export const functionsSlice = createSlice({
	name: "functions",
	initialState,
	reducers: {
		toggleAdd: (state) =>  { 
            return {...state, addingProd: !addingProd}
        },
		toggleEdit: (state) =>  { 
            return {...state, editingProd: !editingProd}
        }
	},
});

export const { toggleAdd, toggleEdit } = functionsSlice.actions;

export default functionsSlice.reducer;