import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Track from "../Screens/Track";
import Cart from "../Screens/Cart";
import Categories from "../Screens/Categories";
import Settings from "../Screens/Settings";
import {
	cart_64,
	categories_64,
	home_64,
	settings_64,
	track_64,
} from "../../assets/icons";
import { StatusBar } from "expo-status-bar";

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
	return (
		<View style={{ flex: 1 }}>
			<Tabs.Navigator
				screenOptions={{
					headerTitleAlign: "center",
					tabBarItemStyle: {
						paddingVertical: 5,
					},
					tabBarStyle: {
						backgroundColor: "rgb(129,212,250)",
						height: 60,
					},
					headerShown: true,
					headerShadowVisible: false,
					headerTintColor: "#fff",
					headerStyle: {
						backgroundColor: "rgb(129,212,250)",
					},
				}}>
				<Tabs.Screen
					name="Home"
					component={Home}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={home_64}
								style={{
									tintColor: focused ? "rgb(0,122,255)" : "#aaa",
									width: 26,
									height: 26,
								}}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="Categories"
					component={Categories}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={categories_64}
								style={{
									tintColor: focused ? "rgb(0,122,255)" : "#aaa",
									width: 26,
									height: 26,
								}}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="Track"
					component={Track}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={track_64}
								style={{
									tintColor: focused ? "rgb(0,122,255)" : "#aaa",
									width: 26,
									height: 26,
								}}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="Cart"
					component={Cart}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={cart_64}
								style={{
									tintColor: focused ? "rgb(0,122,255)" : "#aaa",
									width: 26,
									height: 26,
								}}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="Settings"
					component={Settings}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={settings_64}
								style={{
									tintColor: focused ? "rgb(0,122,255)" : "#aaa",
									width: 26,
									height: 26,
								}}
							/>
						),
					}}
				/>
			</Tabs.Navigator>
			{/* <Text>BottomTabs</Text> */}
			<StatusBar style="light" backgroundColor="rgb(94,174,199)" />
		</View>
	);
};

export default BottomTabs;

const styles = StyleSheet.create({});
