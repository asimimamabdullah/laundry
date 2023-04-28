import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CategoriesCard = ({ item, navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("Category", { item })}
			style={{
				borderWidth: 1,
				borderColor: "#bbb",
				padding: 10,
				borderRadius: 10,
				gap: 10,
				alignItems: "center",
				width: 115,
			}}>
			<Image source={item?.image} style={{ width: 64, height: 64 }} />
			<Text style={{ textAlign: "center" }}>{item?.name}</Text>
		</TouchableOpacity>
	);
};

export default CategoriesCard;

const styles = StyleSheet.create({});
