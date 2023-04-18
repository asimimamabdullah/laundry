import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Track from "../Screens/Track";
import Cart from "../Screens/Cart";
import Categories from "../Screens/Categories";
import Settings from "../Screens/Settings";

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
	return (
		<View style={{ flex: 1 }}>
			<Tabs.Navigator
				screenOptions={{
					headerTitleAlign: "center",
					tabBarStyle: { backgroundColor: "rgb(129,212,250)" },
					headerShown: true,
					headerShadowVisible: false,
				}}>
				<Tabs.Screen name="Home" component={Home} />
				<Tabs.Screen name="Categories" component={Categories} />
				<Tabs.Screen name="Track" component={Track} />
				<Tabs.Screen name="Cart" component={Cart} />
				<Tabs.Screen name="Settings" component={Settings} />
			</Tabs.Navigator>
			{/* <Text>BottomTabs</Text> */}
		</View>
	);
};

export default BottomTabs;

const styles = StyleSheet.create({});
