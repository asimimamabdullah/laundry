import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import HomeCard from "../components/HomeCard";

const Home = () => {
	return (
		<View>
			<View style={{ height: 180, backgroundColor: "#cccccc" }} />

			<View style={{ padding: 20, gap: 20 }}>
				{/* card  */}
				<HomeCard />
				<HomeCard />
				<HomeCard />
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
