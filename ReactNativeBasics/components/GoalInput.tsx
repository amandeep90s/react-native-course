import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

type Props = {
	onAddGoal: (enteredGoalText: string) => void;
	visible: boolean;
};

export default function GoalInput({ onAddGoal, visible }: Readonly<Props>) {
	const [enteredGoalText, setEnteredGoalText] = useState<string>("");

	const goalInputHandler = (enteredText: string) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholderTextColor="#ccc"
					placeholder="Your course goal!"
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 8,
		width: "100%",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 16,
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
