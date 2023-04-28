import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import IsAuth from "./app/components/IsAuth";
import BottomTabs from "./app/navigation/BottomTabs";
import { store } from "./app/redux/store";
import CategoryCards from "./app/Screens/CategoryCards";
import Congrats from "./app/Screens/Congrats";
import Field from "./app/Screens/Field";
import Login from "./app/Screens/Login";
import SignUp from "./app/Screens/SignUp";
import TrackItem from "./app/Screens/TrackItem";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<IsAuth>
				<View style={styles.container}>
					<NavigationContainer>
						<Stack.Navigator
							initialRouteName="BottomTabs"
							screenOptions={{
								headerTintColor: "#fff",
								headerStyle: { backgroundColor: "rgb(129,212,250)" },
							}}>
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

							<Stack.Screen
								name="TrackItem"
								component={TrackItem}
								options={{
									headerShown: true,
									headerTitleAlign: "center",
									headerBackButtonMenuEnabled: true,
								}}
							/>

							<Stack.Screen
								name="Field"
								component={Field}
								options={{
									headerShown: true,
									headerBackButtonMenuEnabled: true,
									headerTitleAlign: "center",
								}}
							/>

							<Stack.Screen
								name="Category"
								component={CategoryCards}
								options={{
									headerShown: true,
									headerBackButtonMenuEnabled: true,
									headerTitleAlign: "center",
								}}
							/>

							<Stack.Screen
								name="Congrats"
								component={Congrats}
								options={{
									headerShown: false,
								}}
							/>
						</Stack.Navigator>
					</NavigationContainer>

					{/* <Text>Open up App.js to start working on your app!</Text> */}
					<StatusBar style="light" backgroundColor="rgb(94,174,199)" />
				</View>
			</IsAuth>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
