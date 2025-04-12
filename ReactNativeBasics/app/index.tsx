import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
	const [enteredGoalText, setEnteredGoalText] = useState<string>("");
	const [courseGoals, setCourseGoals] = useState<{ text: string; id: string }[]>([]);

	const goalInputHandler = (enteredText: string) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: currentCourseGoals.length.toString() },
		]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholderTextColor="#ccc"
					placeholder="Your course goal!"
					style={styles.textInput}
					onChangeText={goalInputHandler}
				/>
				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
			<FlatList
				style={styles.goalsContainer}
				alwaysBounceVertical={false}
				data={courseGoals}
				renderItem={({ item }) => (
					<View style={styles.goalItem}>
						<Text style={styles.goalText}>{item.text}</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
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
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "#fff",
	},
});
