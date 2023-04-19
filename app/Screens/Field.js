import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";

const Field = ({ navigation, route }) => {
	useEffect(() => {
		navigation?.setOptions({
			title: route.params?.name,
		});
	}, [navigation]);
	return (
		<TouchableOpacity onPress={() => navigation.navigate("Home")}>
			<Text>Field</Text>
		</TouchableOpacity>
	);
};

export default Field;

const styles = StyleSheet.create({});
