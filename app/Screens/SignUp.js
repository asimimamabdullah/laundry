import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setCredentials } from "../redux/app/auth/authSlice";
import { useRegisterMutation } from "../redux/app/auth/register";

const SignUp = ({ navigation }) => {
	const [registerDetails, setRegisterDetails] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [errMsg, setErrMsg] = useState(null);

	const [register, { loading }] = useRegisterMutation();
	const dispatch = useDispatch();

	const handleRegister = async () => {
		try {
			const userData = await register({ ...registerDetails }).unwrap();
			await AsyncStorage.setItem("token", userData.accessToken);

			dispatch(setCredentials({ ...userData }));
			navigation.navigate("Home");
		} catch (error) {
			console.log("error register: ", error);
			setErrMsg(error?.data?.message);
		}
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "rgb(207,216,220)",
				justifyContent: "space-between",
				padding: 10,
			}}>
			<View
				style={{
					minHeight: 200,
					justifyContent: "center",
					alignItems: "center",
					gap: 10,
				}}>
				<Text style={{ fontSize: 26 }}>Welcome, Guest</Text>
				<Text style={{ fontWeight: 400 }}>
					Already have an account?{" "}
					<Text style={{ fontWeight: 600 }}>Sign In</Text>
				</Text>
			</View>
			<View
				style={{
					backgroundColor: "#fff",
					flex: 1,
					paddingHorizontal: 20,
					justifyContent: "space-between",
					paddingTop: 30,
					paddingBottom: 20,
					marginBottom: 30,
					zIndex: 4,
				}}>
				{/* upper  */}
				<View style={{ gap: 20 }}>
					<TextInput
						value={registerDetails?.name}
						placeholder="Full name"
						placeholderTextColor="#bbb"
						style={{
							paddingVertical: 15,
							paddingHorizontal: 20,
							backgroundColor: "rgb(241,245,247)",
							borderRadius: 5,
						}}
						onChangeText={(t) =>
							setRegisterDetails((prev) => ({ ...prev, name: t }))
						}
					/>
					<TextInput
						value={registerDetails?.email}
						placeholder="email"
						placeholderTextColor="#bbb"
						style={{
							paddingVertical: 15,
							paddingHorizontal: 20,
							backgroundColor: "rgb(241,245,247)",
							borderRadius: 5,
						}}
						onChangeText={(t) =>
							setRegisterDetails((prev) => ({ ...prev, email: t }))
						}
					/>
					<TextInput
						value={registerDetails?.password}
						placeholder="password"
						placeholderTextColor="#bbb"
						style={{
							paddingVertical: 15,
							paddingHorizontal: 20,
							backgroundColor: "rgb(241,245,247)",
							borderRadius: 5,
						}}
						onChangeText={(t) =>
							setRegisterDetails((prev) => ({ ...prev, password: t }))
						}
					/>

					{/* remember me container  */}
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<View>
							{/* checkbox  */}
							<View />
							<Text>Remember me</Text>
						</View>
						<TouchableOpacity>
							<Text>Forgot Password?</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						onPress={handleRegister}
						style={{
							padding: 20,
							backgroundColor: "rgb(129,212,250)",
							borderRadius: 5,
						}}>
						<Text
							style={{
								fontSize: 16,
								color: "#fff",
								textAlign: "center",
							}}>
							Sign Up
						</Text>
					</TouchableOpacity>
				</View>
				{/* bottom */}
			</View>

			<View
				style={{
					position: "absolute",
					top: 280,
					left: 0,
					bottom: 0,
					right: 0,
					backgroundColor: "rgb(248,248,248)",
				}}
			/>

			{/* facebook sign up  */}
			<View style={{ gap: 20, marginHorizontal: 20, bottom: 10 }}>
				{/* <View> */}
				<TouchableOpacity
					style={{
						backgroundColor: "rgb(129,212,250)",
						padding: 20,
						borderRadius: 5,
					}}>
					<Text
						style={{
							textAlign: "center",
							fontSize: 16,
							color: "#fff",
							fontWeight: 500,
						}}>
						Continue with facebook
					</Text>
				</TouchableOpacity>
				{/* </View> */}
			</View>
		</View>
	);
};

export default SignUp;

const styles = StyleSheet.create({});
