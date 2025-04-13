import PrimaryButton from "@/components/PrimaryButton";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function StartGame() {
	return (
		<View style={styles.inputContainer}>
			<TextInput placeholder="Enter your number" placeholderTextColor={"#ccc"} />
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Confirm</PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		backgroundColor: "#72063c",
		borderRadius: 8,
		elevation: 4,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
});
