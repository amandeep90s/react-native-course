import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

type Props = {
	onAddGoal: (enteredGoalText: string) => void;
};

export default function GoalInput({ onAddGoal }: Readonly<Props>) {
	const [enteredGoalText, setEnteredGoalText] = useState<string>("");

	const goalInputHandler = (enteredText: string) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholderTextColor="#ccc"
				placeholder="Your course goal!"
				style={styles.textInput}
				onChangeText={goalInputHandler}
				value={enteredGoalText}
			/>
			<Button title="Add Goal" onPress={addGoalHandler} />
		</View>
	);
}

const styles = StyleSheet.create({
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
});
