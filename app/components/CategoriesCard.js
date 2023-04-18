import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DryClean_128 } from "../../assets/icons";

const CategoriesCard = () => {
	return (
		<View
			style={{
				borderWidth: 1,
				borderColor: "#bbb",
				padding: 10,
				borderRadius: 10,
				// flex: 0.32,
				gap: 10,
				alignItems: "center",
				// minWidth: 90,
				width: 115,
			}}>
			<Image source={DryClean_128} style={{ width: 64, height: 64 }} />
			<Text style={{ textAlign: "center" }}>Dry Clean</Text>
		</View>
	);
};

export default CategoriesCard;

const styles = StyleSheet.create({});
