import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// import Carousel from "react-native-snap-carousel";
import HomeCard from "../components/HomeCard";
import { useSelector } from "react-redux";
import { selectCategoryData } from "../redux/app/categories/categoriesSlice";

const Home = ({ navigation }) => {
	const categories = useSelector(selectCategoryData);

	return (
		<ScrollView style={{ flex: 1 }}>
			{/* <View style={{ height: 180, backgroundColor: "rgb(94,174,199)" }} /> */}
			<View
				style={{
					height: 180,
					backgroundColor: "rgb(94,174,199)",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<View style={{ position: "absolute", left: 70, bottom: 30 }}>
					<Text style={{ color: "#fff" }}>{categories[0]?.name}</Text>
				</View>
				<View>
					<Image
						source={categories[0]?.image}
						style={{ width: 80, height: 80 }}
					/>
				</View>
			</View>

			<View style={{ padding: 20, gap: 20, flex: 1 }}>
				{categories?.map((category, categoryIndex) => {
					return category?.details?.map((item, index) => (
						<HomeCard
							navigation={navigation}
							category={category}
							image={category.image}
							item={item}
							key={index}
						/>
					));
				})}
			</View>
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({});
