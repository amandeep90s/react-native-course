import PrimaryButton from "@/components/PrimaryButton";
import React from "react";
import { TextInput, View } from "react-native";

export default function StartGame() {
	return (
		<View>
			<TextInput placeholder="Enter your number" placeholderTextColor={"#ccc"} />
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Confirm</PrimaryButton>
		</View>
	);
}
