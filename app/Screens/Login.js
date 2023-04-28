import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../redux/app/auth/login";
import { setCredentials } from "../redux/app/auth/authSlice";

const Login = ({ navigation }) => {
	const [loginDetails, setLoginDetails] = useState({
		email: "",
		password: "",
	});
	const [errMsg, setErrMsg] = useState(null);
	const dispatch = useDispatch();

	const [login] = useLoginMutation();

	const handleSubmit = async () => {
		try {
			const userData = await login({
				...loginDetails,
			}).unwrap();
			await AsyncStorage.setItem("token", userData?.accessToken);

			dispatch(
				setCredentials({
					...userData,
				}),
			);
			navigation.navigate("Home");
		} catch (err) {
			// if (!err?.response) setErrMsg("No Server Response");
			// else if (err.originalStatus?.status === 400)
			// 	setErrMsg("Missing Username or password");
			// else if (err.originalStatus?.status === 401) setErrMsg("Unauthorized");
			// else setErrMsg("Login Failed");
			console.log("login erro: ", err);
			setErrMsg(err?.data?.error);
			// errRef.current.focus();
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
			<View style={{ height: 150 }} />
			<View
				style={{
					backgroundColor: "#fff",
					flex: 1,
					paddingHorizontal: 20,
					justifyContent: "space-between",
					paddingTop: 50,
					paddingBottom: 20,
				}}>
				{/* upper  */}
				<View style={{ gap: 20 }}>
					<TextInput
						value={loginDetails?.email}
						placeholder="Username"
						placeholderTextColor="#bbb"
						style={{
							paddingVertical: 15,
							paddingHorizontal: 20,
							backgroundColor: "rgb(241,245,247)",
							borderRadius: 5,
						}}
						onChangeText={(t) =>
							setLoginDetails((prev) => ({ ...prev, email: t }))
						}
					/>
					<TextInput
						value={loginDetails?.password}
						placeholder="Password"
						placeholderTextColor="#bbb"
						style={{
							paddingVertical: 15,
							paddingHorizontal: 20,
							backgroundColor: "rgb(241,245,247)",
							borderRadius: 5,
						}}
						onChangeText={(t) =>
							setLoginDetails((prev) => ({ ...prev, password: t }))
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
						onPress={handleSubmit}
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
							Sign In
						</Text>
					</TouchableOpacity>
				</View>

				{/* bottom */}
				<View style={{ gap: 20 }}>
					{/* lines draw  */}
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<View
							style={{ flex: 1, height: 2, backgroundColor: "#bbbbbb" }}
						/>
						<View>
							<View
								style={{
									height: 56,
									width: 56,
									padding: 15,
									borderRadius: 50,
									borderColor: "#bbbbbb",
									borderWidth: 1,
									justifyContent: "center",
								}}>
								<Text style={{ textAlign: "center", fontSize: 15 }}>
									Or
								</Text>
							</View>
						</View>
						<View
							style={{ flex: 1, height: 2, backgroundColor: "#bbbbbb" }}
						/>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("SignUp")}
							style={{
								backgroundColor: "rgb(129,212,250)",
								padding: 20,
							}}>
							<Text
								style={{
									textAlign: "center",
									fontSize: 16,
									color: "#fff",
								}}>
								Sign up
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({});
