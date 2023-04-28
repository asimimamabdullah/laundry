import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TrackCard from "../components/TrackCard";
import {
	selectCurrentToken,
	selectCurrentUser,
} from "../redux/app/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { storeOrders } from "../redux/app/categories/categoriesSlice";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

const Track = ({ navigation }) => {
	const [errorMsg, setErrorMsg] = useState(null);
	const [orders, setOrders] = useState([]);
	const user = useSelector(selectCurrentUser);
	const token = useSelector(selectCurrentToken);
	const dispatch = useDispatch();

	const getTickets = async () => {
		try {
			const auth = {
				headers: { Authorization: `Bearer ${token}` },
			};

			const res = await axios.get(
				`http://10.0.2.2:3000/api/order/${user._id}`,
				auth,
			);

			dispatch(storeOrders({ orders: res.data.orders }));
			setOrders(res.data.orders);
		} catch (error) {
			console.log("error: ", error);
			setErrorMsg(error?.error || error);
		}
	};
	useEffect(() => {
		if (token) {
			getTickets();
		}
	}, [token]);

	return (
		<SafeAreaView style={{ backgroundColor: "#fff", padding: 20, flex: 1 }}>
			<Text style={{ textAlign: "center", color: "#bbb" }}>Your Orders</Text>

			<View style={{ marginVertical: 10 }}>
				{orders?.map((order, index) => (
					<TrackCard navigation={navigation} item={order} key={index} />
				))}
			</View>
		</SafeAreaView>
	);
};

export default Track;

const styles = StyleSheet.create({});
