import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
	DryClean_128,
	laundry_128,
	starching_128,
	steamPress_128,
	WashAndFold_128,
} from "../../assets/icons";
import CategoriesCard from "../components/CategoriesCard";

const Categories = ({ navigation }) => {
	const [categories, setCategories] = useState([
		{ id: 1, name: "Dry Clean", image: DryClean_128 },
		{ id: 2, name: "Wash & Fold", image: WashAndFold_128 },
		{ id: 3, name: "Steam Press", image: steamPress_128 },
		{ id: 4, name: "Starching", image: starching_128 },
		{ id: 5, name: "Laundry", image: laundry_128 },
	]);
	return (
		<View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
			<ScrollView
				contentContainerStyle={{
					flexDirection: "row",
					flexWrap: "wrap",
					gap: 10,
					// justifyContent: "space-between",
				}}>
				{categories?.map((item, index) => (
					<CategoriesCard
						navigation={navigation}
						item={item}
						key={index}
					/>
				))}
				{/* <CategoriesCard />
				<CategoriesCard />
				<CategoriesCard />
				<CategoriesCard /> */}
			</ScrollView>
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({});
