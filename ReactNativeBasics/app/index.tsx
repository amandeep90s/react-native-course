import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
	const [enteredGoalText, setEnteredGoalText] = useState<string>("");

	const goalInputHandler = (enteredText: string) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		console.log(enteredGoalText);
		setEnteredGoalText("");
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput placeholder="Your course goal!" style={styles.textInput} onChangeText={goalInputHandler} />
				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<Text>List of goals...</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 24,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 24,
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#ccc",
		width: "70%",
		marginRight: 9,
		padding: 8,
	},
	goalsContainer: {
		flex: 5,
	},
});
