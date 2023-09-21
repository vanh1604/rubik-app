import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../constansts/items";
import { QuizzItemProps } from "../components/Quizz/QuizzItem";

type LoadingState = {
	isLoading: boolean;
};

const initialState: any[] = ["12:00", "17:00", "21:00"];

const loadingSlice = createSlice({
	name: "answer",
	initialState,
	reducers: {
		addCalendar: (state: any[], action: PayloadAction<any>) => {
			state.push(action.payload);
		},
		updateCalendar: (state: any[], action: PayloadAction<{ index: number; value: any }>) => {
			state[action.payload.index] = action.payload.value;
		},
	},
});

export const addCalendar = loadingSlice.actions.addCalendar;
export const updateCalendar = loadingSlice.actions.updateCalendar;
export const calendarReducer = loadingSlice.reducer;
