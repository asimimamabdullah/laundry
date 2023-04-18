import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomTabs from "./app/navigation/BottomTabs";
import Login from "./app/Screens/Login";
import SignUp from "./app/Screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="BottomTabs">
					<Stack.Screen
						name="Login"
						component={Login}
						options={{
							headerTitleAlign: "center",
							headerBackButtonMenuEnabled: true,
						}}
					/>
					<Stack.Screen
						name="SignUp"
						component={SignUp}
						options={{
							headerTitleAlign: "center",
							headerBackButtonMenuEnabled: true,
						}}
					/>
					<Stack.Screen
						name="BottomTabs"
						component={BottomTabs}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>

			{/* <Text>Open up App.js to start working on your app!</Text> */}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
