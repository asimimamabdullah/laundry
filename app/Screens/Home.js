import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// import Carousel from "react-native-snap-carousel";
import HomeCard from "../components/HomeCard";
import {
	DryClean_128,
	laundry_128,
	starching_128,
	steamPress_128,
	WashAndFold_128,
} from "../../assets/icons";

const Home = ({ navigation }) => {
	const [categories, setCategories] = useState([
		{
			id: 1,
			name: "Dry Clean",
			image: DryClean_128,
			details: [
				{ id: 111, catId: 1, name: "Cool Laundry", price: 12 },
				{ id: 112, catId: 1, name: "Charlie Laundry", price: 12 },
				{ id: 113, catId: 1, name: "Laundry Cleaner", price: 15 },
			],
		},
		{
			id: 2,
			name: "Wash & Fold",
			image: WashAndFold_128,
			details: [
				{ id: 111, catId: 2, name: "Cool Laundry", price: 12 },
				{ id: 112, catId: 2, name: "Charlie Laundry", price: 12 },
				{ id: 113, catId: 2, name: "Laundry Cleaner", price: 15 },
			],
		},
		{
			id: 3,
			name: "Steam Press",
			image: steamPress_128,
			details: [
				{ id: 111, catId: 3, name: "Cool Laundry", price: 12 },
				{ id: 112, catId: 3, name: "Charlie Laundry", price: 12 },
				{ id: 113, catId: 3, name: "Laundry Cleaner", price: 15 },
			],
		},
		{
			id: 4,
			name: "Starching",
			image: starching_128,
			details: [
				{ id: 111, catId: 4, name: "Cool Laundry", price: 12 },
				{ id: 112, catId: 4, name: "Charlie Laundry", price: 12 },
				{ id: 113, catId: 4, name: "Laundry Cleaner", price: 15 },
			],
		},
		{
			id: 5,
			name: "Laundry",
			image: laundry_128,
			details: [
				{ id: 111, catId: 5, name: "Cool Laundry", price: 12 },
				{ id: 112, catId: 5, name: "Charlie Laundry", price: 12 },
				{ id: 113, catId: 5, name: "Laundry Cleaner", price: 15 },
			],
		},
	]);

	return (
		<ScrollView style={{ flex: 1 }}>
			<View style={{ height: 180, backgroundColor: "#cccccc" }} />

			<View style={{ padding: 20, gap: 20, flex: 1 }}>
				{/* {categories
					?.flatMap((category) => category.details)
					.map((item, index) => (
						<View>
							<HomeCard
								navigation={navigation}
								categories={categories}
								item={item}
								key={index}
							/>
						</View>
					))} */}
				{categories?.map((category, categoryIndex) => {
					return category?.details?.map((item, index) => (
						<HomeCard
							navigation={navigation}
							category={category}
							item={item}
							key={index}
						/>
					));
				})}
				{/* card  */}
				{/* <HomeCard />
				<HomeCard />
				<HomeCard /> */}
			</View>
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({});
