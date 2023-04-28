import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import {
	DryClean_128,
	laundry_128,
	starching_128,
	steamPress_128,
	WashAndFold_128,
} from "../../../../assets/icons";

const initialState = [
	{
		id: 1,
		name: "Dry Clean",
		image: DryClean_128,
		details: [
			{ id: 111, catId: 1, name: "Cool Laundry", price: 12 },
			{ id: 112, catId: 1, name: "Charlie Laundry", price: 12 },
			{ id: 113, catId: 1, name: "Laundry Cleaner", price: 15 },
		],
	},
	{
		id: 2,
		name: "Wash & Fold",
		image: WashAndFold_128,
		details: [
			{ id: 111, catId: 2, name: "Cool Laundry", price: 12 },
			{ id: 112, catId: 2, name: "Charlie Laundry", price: 12 },
			{ id: 113, catId: 2, name: "Laundry Cleaner", price: 15 },
		],
	},
	{
		id: 3,
		name: "Steam Press",
		image: steamPress_128,
		details: [
			{ id: 111, catId: 3, name: "Cool Laundry", price: 12 },
			{ id: 112, catId: 3, name: "Charlie Laundry", price: 12 },
			{ id: 113, catId: 3, name: "Laundry Cleaner", price: 15 },
		],
	},
	{
		id: 4,
		name: "Starching",
		image: starching_128,
		details: [
			{ id: 111, catId: 4, name: "Cool Laundry", price: 12 },
			{ id: 112, catId: 4, name: "Charlie Laundry", price: 12 },
			{ id: 113, catId: 4, name: "Laundry Cleaner", price: 15 },
		],
	},
	{
		id: 5,
		name: "Laundry",
		image: laundry_128,
		details: [
			{ id: 111, catId: 5, name: "Cool Laundry", price: 12 },
			{ id: 112, catId: 5, name: "Charlie Laundry", price: 12 },
			{ id: 113, catId: 5, name: "Laundry Cleaner", price: 15 },
		],
	},
];

const categoriesSlice = createSlice({
	name: "category",
	initialState: {
		categories: initialState,
		orders: null,
	},
	reducers: {
		storeOrders: (state, action) => {
			state.orders = action.payload.orders;
		},
	},
});

export const { storeOrders } = categoriesSlice.actions;

export default categoriesSlice.reducer;
//
export const selectCategoryData = (state) => state.category.categories;
// export const selectCurrentToken = (state) => state.auth.token;
