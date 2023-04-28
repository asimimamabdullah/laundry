import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./app/auth/authSlice.js";
import categoriesReducer from "./app/categories/categoriesSlice.js";
import locationReducer from "./app/locationSlice.js";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer,
		category: categoriesReducer,
		location: locationReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			apiSlice.middleware,
		),
	devTools: true,
});
