import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { DryClean_128 } from "../../assets/icons";
import CategoriesCard from "../components/CategoriesCard";

const Categories = () => {
	const [categories, setCategories] = useState([
		{ id: 1, name: "Dry Clean", image: DryClean_128 },
	]);
	return (
		<View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					gap: 10,
					justifyContent: "space-between",
				}}>
				<CategoriesCard />
				<CategoriesCard />
				<CategoriesCard />
				<CategoriesCard />
			</View>
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({});
