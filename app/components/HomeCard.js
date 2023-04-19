import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HomeCard = ({ navigation, item, category }) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("Field", item)}
			style={{
				flexDirection: "row",
				backgroundColor: "#fff",
				height: 130,
				borderRadius: 5,
			}}>
			<View
				style={{
					padding: 20,
					flex: 0.6,
					justifyContent: "space-between",
				}}>
				<Text style={{ fontSize: 15 }}>{item.name}</Text>
				<Text style={{ color: "#bbbbbb", fontSize: 13 }}>
					{category?.name}
				</Text>
			</View>
			{item.image ? (
				<Image source={item.image} style={{ width: 120, height: "100%" }} />
			) : (
				<View style={{ backgroundColor: "rgb(94,174,199)", flex: 0.4 }} />
			)}
		</TouchableOpacity>
	);
};

export default HomeCard;

const styles = StyleSheet.create({});
