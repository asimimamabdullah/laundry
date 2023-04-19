import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TrackItem = () => {
	return (
		<View style={{ flex: 1 }}>
			<View>
				<View style={{ height: 140, backgroundColor: "rgb(94,174,199)" }} />
				{/* mid ticket etc */}
				<View
					style={{
						paddingHorizontal: 20,
						paddingTop: 20,
						paddingBottom: 5,
						gap: 15,
						borderBottomColor: "#ddd",
						borderBottomWidth: 1,
					}}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text style={{ fontWeight: 500, fontSize: 15 }}>
							T-shirt Washing{" "}
						</Text>
						<Text style={{ fontWeight: 500, fontSize: 15 }}>£56.87</Text>
					</View>
					<View
						style={{
							backgroundColor: "rgb(94,174,199)",
							paddingVertical: 15,
							paddingHorizontal: 20,
							borderRadius: 5,
						}}>
						<Text style={{ color: "#fff" }}>#3211</Text>
					</View>
				</View>
			</View>

			<View style={{ gap: 20, flexDirection: "row", paddingHorizontal: 20 }}>
				<View
					style={{
						alignItems: "center",
						padding: 20,
					}}>
					<View
						style={{
							width: 24,
							height: 24,
							borderRadius: 15,
							backgroundColor: "rgb(94,174,199)",
						}}
					/>
					<View
						style={{
							height: 50,
							width: 2,
							backgroundColor: "rgb(94,174,199)",
						}}
					/>

					<View
						style={{
							width: 24,
							height: 24,
							borderRadius: 15,
							backgroundColor: "rgb(94,174,199)",
						}}
					/>
					<View
						style={{
							height: 50,
							width: 2,
							backgroundColor: "rgb(94,174,199)",
						}}
					/>

					<View
						style={{
							width: 24,
							height: 24,
							borderRadius: 15,
							backgroundColor: "rgb(94,174,199)",
						}}
					/>
					<View
						style={{
							height: 50,
							width: 2,
							backgroundColor: "rgb(94,174,199)",
						}}
					/>

					<View
						style={{
							width: 24,
							height: 24,
							borderRadius: 15,
							backgroundColor: "rgb(94,174,199)",
						}}
					/>
					<View
						style={{
							height: 50,
							width: 2,
							backgroundColor: "rgb(94,174,199)",
						}}
					/>

					<View
						style={{
							width: 24,
							height: 24,
							borderRadius: 15,
							backgroundColor: "rgb(94,174,199)",
						}}
					/>
				</View>

				<View
					style={{
						justifyContent: "space-between",
						paddingVertical: 21,
						flex: 1,
					}}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text style={{}}>Collection</Text>
						<Text style={{ color: "#bbb" }}>Aug 25</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text style={{}}>Washing</Text>
						<Text style={{ color: "#bbb" }}>Aug 25</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text style={{}}>Drying</Text>
						<Text style={{ color: "#bbb" }}>Aug 25</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text style={{}}>Pressing</Text>
						<Text style={{ color: "#bbb" }}>Aug 25</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text style={{}}>Out for Delivery</Text>
						<Text style={{ color: "#bbb" }}>Aug 25</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default TrackItem;

const styles = StyleSheet.create({});
