import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { congrats_128 } from "../../assets/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectLocationDetails } from "../redux/app/locationSlice";

const Congrats = ({ route, navigation }) => {
	const { item } = route.params;
	const currentLocation = useSelector(selectLocationDetails);

	return (
		<SafeAreaView
			style={{
				flex: 1,
				alignItems: "center",
				paddingTop: 100,
				gap: 40,
				paddingHorizontal: 20,
			}}>
			<View style={{ gap: 30, alignItems: "center" }}>
				<Image source={congrats_128} style={{ width: 130, height: 130 }} />
				<Text style={{ color: "#444", fontSize: 22, textAlign: "center" }}>
					Congratulations your made an order
				</Text>
			</View>

			<View>
				{item?.deliveryType === "Delivery" ? (
					<>
						<Text
							style={{
								color: "#888",
								fontSize: 16,
								textAlign: "center",
							}}>
							Your Items will be collected and delivered to your place
						</Text>
						{currentLocation.currentLocation ? (
							<Text
								style={{
									textAlign: "center",
									marginTop: 30,
								}}>{`${currentLocation.currentRegion?.street} ${currentLocation.currentRegion?.streetNumber}, ${currentLocation.currentRegion?.city}, ${currentLocation.currentRegion?.postalCode} `}</Text>
						) : (
							<Text
								style={{
									textAlign: "center",
									marginTop: 30,
									color: "red",
								}}>
								Please enable location services in settings
							</Text>
						)}
					</>
				) : (
					<Text
						style={{ color: "#888", fontSize: 16, textAlign: "center" }}>
						Visit our store anytime & drop{" "}
					</Text>
				)}
			</View>

			<View
				style={{
					padding: 20,
					position: "absolute",
					left: 0,
					bottom: 0,
					right: 0,
				}}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Home")}
					style={{
						padding: 15,
						borderRadius: 40,
						backgroundColor: "rgb(94,174,199)",
					}}>
					<Text
						style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>
						Done
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Congrats;

const styles = StyleSheet.create({});
