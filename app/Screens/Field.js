import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { RadioButton } from "react-native-paper";
import axios from "axios";
import { useSelector } from "react-redux";
import {
	selectCurrentToken,
	selectCurrentUser,
} from "../redux/app/auth/authSlice";

const Field = ({ navigation, route }) => {
	const { item } = route.params;
	const [selectedData, setSelectedData] = useState({
		deliveryType: "",
		size: "",
		instructions: "",
	});
	const [errorMsg, setErrorMsg] = useState(null);

	const token = useSelector(selectCurrentToken);
	const user = useSelector(selectCurrentUser);

	useEffect(() => {
		navigation?.setOptions({
			title: route.params?.item?.name,
		});
	}, [navigation]);

	useEffect(() => {
		setTimeout(() => {
			setErrorMsg(null);
		}, 3000);
	}, [errorMsg]);

	const createOrder = async () => {
		if (token) {
			try {
				const auth = {
					headers: { Authorization: `Bearer ${token}` },
				};

				const res = await axios.post(
					`http://10.0.2.2:3000/api/order`,
					{
						item: {
							...selectedData,
							category_id: item.catId,
							product: item?.name,
							price: item?.price,
							user_id: user._id,
						},
					},
					auth,
				);

				setSelectedData({
					deliveryType: "",
					size: "",
					instructions: "",
				});
				navigation.navigate("Congrats", { item: { ...res.data.order } });
			} catch (error) {
				console.log("error: ", error);
			}
		} else setErrorMsg("Please login and then try again");
	};

	return (
		<ScrollView>
			{errorMsg && (
				<View
					style={{
						flexDirection: "row",
						position: "absolute",
						left: 0,
						top: 50,
						right: 0,
					}}>
					<View
						style={{
							backgroundColor: "rgb(122,0,18)",
							padding: 12,
							borderRadius: 10,
						}}>
						<Text style={{ color: "#fff", textAlign: "center" }}>
							{errorMsg}
						</Text>
					</View>
				</View>
			)}
			<View
				style={{
					height: 180,
					backgroundColor: "rgb(94,174,199)",
					paddingHorizontal: 20,
					justifyContent: "flex-end",
				}}>
				<Text style={{ bottom: 30, color: "#fff" }}>
					{route.params?.item?.name}
				</Text>
			</View>

			<View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
				<Text>Delivery Method</Text>
				<TouchableOpacity
					onPress={() =>
						setSelectedData((prev) => ({
							...prev,
							deliveryType: "Pickup",
						}))
					}
					style={{
						borderBottomColor: "#ddd",
						borderBottomWidth: 0.5,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						paddingVertical: 10,
					}}>
					<View>
						<Text style={{ fontWeight: 500, fontSize: 15 }}>
							Drop and Pickup in store
						</Text>
						<Text style={{ color: "#bbb", fontSize: 13 }}>
							1 Rockefellar center, NY
						</Text>
					</View>
					<RadioButton
						value="Pickup"
						status={
							selectedData.deliveryType === "Pickup"
								? "checked"
								: "unchecked"
						}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() =>
						setSelectedData((prev) => ({
							...prev,
							deliveryType: "Delivery",
						}))
					}
					style={{
						borderBottomColor: "#ddd",
						borderBottomWidth: 0.5,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						paddingVertical: 10,
					}}>
					<View>
						<Text style={{ fontWeight: 500, fontSize: 15 }}>
							Collection and Delivery
						</Text>
						<Text style={{ color: "#bbb", fontSize: 13 }}>
							2 - 7 business days
						</Text>
					</View>
					<RadioButton
						value="Delivery"
						status={
							selectedData.deliveryType === "Delivery"
								? "checked"
								: "unchecked"
						}
					/>
				</TouchableOpacity>
			</View>

			<View style={{ paddingHorizontal: 20 }}>
				<Text>SIZE</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						paddingVertical: 20,
					}}>
					<TouchableOpacity
						onPress={() =>
							setSelectedData((prev) => ({ ...prev, size: "XS" }))
						}
						style={{
							backgroundColor:
								selectedData.size === "XS"
									? "rgb(129,212,250)"
									: "rgb(94,174,199)",
							borderRadius: 30,
							width: 50,
							height: 50,
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text style={{ color: "#fff" }}>XS</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							setSelectedData((prev) => ({ ...prev, size: "S" }))
						}
						style={{
							backgroundColor:
								selectedData.size === "S"
									? "rgb(129,212,250)"
									: "rgb(94,174,199)",
							borderRadius: 30,
							width: 50,
							height: 50,
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text style={{ color: "#fff" }}>S</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							setSelectedData((prev) => ({ ...prev, size: "M" }))
						}
						style={{
							backgroundColor:
								selectedData.size === "M"
									? "rgb(129,212,250)"
									: "rgb(94,174,199)",
							borderRadius: 30,
							width: 50,
							height: 50,
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text style={{ color: "#fff" }}>M</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							setSelectedData((prev) => ({ ...prev, size: "L" }))
						}
						style={{
							backgroundColor:
								selectedData.size === "L"
									? "rgb(129,212,250)"
									: "rgb(94,174,199)",
							borderRadius: 30,
							width: 50,
							height: 50,
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text style={{ color: "#fff" }}>L</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							setSelectedData((prev) => ({ ...prev, size: "XL" }))
						}
						style={{
							backgroundColor:
								selectedData.size === "XL"
									? "rgb(129,212,250)"
									: "rgb(94,174,199)",
							borderRadius: 30,
							width: 50,
							height: 50,
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text style={{ color: "#fff" }}>XL</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							setSelectedData((prev) => ({ ...prev, size: "XXL" }))
						}
						style={{
							backgroundColor:
								selectedData.size === "XXL"
									? "rgb(129,212,250)"
									: "rgb(94,174,199)",
							borderRadius: 30,
							width: 50,
							height: 50,
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text style={{ color: "#fff" }}>XXL</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ padding: 20, gap: 20 }}>
				<Text style={{ color: "#888" }}>EXTRA</Text>
				<View>
					<TextInput
						numberOfLines={8}
						value={selectedData.instructions}
						style={{
							borderColor: "#ddd",
							borderWidth: 1,
							borderRadius: 5,
							padding: 20,
						}}
						onChangeText={(e) =>
							setSelectedData((prev) => ({ ...prev, instructions: e }))
						}
						placeholder="Instructions"
					/>
				</View>
			</View>

			<View
				style={{
					paddingVertical: 10,
					paddingHorizontal: 20,
					flexDirection: "row",
				}}>
				<TouchableOpacity
					onPress={createOrder}
					style={{
						borderRadius: 40,
						flex: 1,
						backgroundColor: "rgb(94,174,199)",
						padding: 15,
					}}>
					<Text
						style={{ color: "#fff", fontSize: 15, textAlign: "center" }}>
						Create Order
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default Field;

const styles = StyleSheet.create({});
