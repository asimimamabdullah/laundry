import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HomeCard = ({ navigation, item, category, image }) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("Field", { item })}
			style={{
				backgroundColor: "#fff",
				height: 130,
				borderRadius: 5,
			}}>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
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
				<View
					style={{
						alignItems: "center",
						flex: 0.4,
						justifyContent: "center",
					}}>
					{image ? (
						<Image source={image} style={{ width: 60, height: 60 }} />
					) : (
						<View
							style={{ backgroundColor: "rgb(94,174,199)", flex: 0.4 }}
						/>
					)}
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default HomeCard;

const styles = StyleSheet.create({});
