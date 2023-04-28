import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TrackCard = ({ navigation, item }) => {
	return (
		<TouchableOpacity
			style={{ flexDirection: "row" }}
			onPress={() => navigation.navigate("TrackItem")}>
			<View style={{ gap: 10, padding: 10 }}>
				<Text>
					APR 27{new Date(item?.createdAt).toDateString().substring(4, 8)}
				</Text>
				<Text>
					FRI{new Date(item?.createdAt).toDateString().substring(0, 4)}
				</Text>
			</View>
			<View
				style={{
					padding: 10,
					flex: 1,
					gap: 5,
				}}>
				<Text
					style={{
						fontWeight: 500,
						letterSpacing: 0.1,
						fontSize: 15,
					}}>
					{item?.product}
				</Text>
				<Text style={{ color: "#cccccc" }}>Order Number # 3211</Text>
				<View>
					<TouchableOpacity
						style={{
							backgroundColor: "rgb(94,174,199)",
							alignSelf: "flex-end",
							paddingVertical: 7,
							paddingHorizontal: 25,
							borderRadius: 3,
						}}>
						<Text style={{ color: "#fff" }}>Track</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default TrackCard;

const styles = StyleSheet.create({});
