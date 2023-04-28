import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeCard from "../components/HomeCard";

const CategoryCards = ({ navigation, route }) => {
	const { item } = route.params;
	return (
		<SafeAreaView style={{ padding: 20, flex: 1, gap: 20 }}>
			{item?.details?.map((product, index) => (
				<HomeCard
					navigation={navigation}
					category={item}
					image={item.image}
					item={product}
					key={index}
				/>
			))}
		</SafeAreaView>
	);
};

export default CategoryCards;
