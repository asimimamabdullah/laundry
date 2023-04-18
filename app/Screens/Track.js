import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import TrackCard from "../components/TrackCard";

const Track = () => {
	return (
		<View style={{ backgroundColor: "#fff", padding: 20, flex: 1 }}>
			<Text style={{ textAlign: "center", color: "#bbb" }}>Your Orders</Text>

			<View style={{ marginVertical: 10 }}>
				{/* Card  */}
				<TrackCard />
				<TrackCard />
				<TrackCard />
				<TrackCard />
				<TrackCard />
				<TrackCard />
			</View>
		</View>
	);
};

export default Track;

const styles = StyleSheet.create({});
