import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

type Props = {
	onAddGoal: (enteredGoalText: string) => void;
	visible: boolean;
	onClose: () => void;
};

export default function GoalInput({ onAddGoal, visible, onClose }: Readonly<Props>) {
	const [enteredGoalText, setEnteredGoalText] = useState<string>("");

	const goalInputHandler = (enteredText: string) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		onAddGoal(enteredGoalText);
		setEnteredGoalText("");
		onClose();
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image source={require("@/assets/images/goal.png")} style={styles.image} />
				<TextInput
					placeholderTextColor="#123438"
					placeholder="Your course goal!"
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<Button title="Cancel" onPress={onClose} color="#f31282" />
					</View>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
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
		backgroundColor: "#311b6b",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#123438",
		width: "100%",
		borderRadius: 6,
		padding: 16,
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
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});
