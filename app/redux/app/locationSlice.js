import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
	name: "location",
	initialState: {
		currentLocation: null,
		currentRegion: null,
	},
	reducers: {
		setCurrentLocation: (state, action) => {
			state.currentLocation = action.payload.coords;
			state.currentRegion = action.payload.region;
		},
	},
});

export const { setCurrentLocation } = locationSlice.actions;

export default locationSlice.reducer;

export const selectLocationDetails = (state) => state.location;
