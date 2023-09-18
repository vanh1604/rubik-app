import { createSlice } from "@reduxjs/toolkit";

type LoadingState = {
	isLoading: boolean;
};

const initialState: LoadingState = {
	isLoading: false,
};

const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		setLoading: (state: LoadingState) => {
			state.isLoading = true;
		},
		removeLoading: (state: LoadingState) => {
			state.isLoading = false;
		},
	},
});

export const setLoading = loadingSlice.actions.setLoading;
export const removeLoading = loadingSlice.actions.removeLoading;
export const loadingReducer = loadingSlice.reducer;
