import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeCard = () => {
	return (
		<View
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
				<Text style={{ fontSize: 15 }}>Cool Laundry</Text>
				<Text style={{ color: "#bbbbbb", fontSize: 13 }}>Category</Text>
			</View>
			<View style={{ backgroundColor: "rgb(94,174,199)", flex: 0.4 }} />
		</View>
	);
};

export default HomeCard;

const styles = StyleSheet.create({});
