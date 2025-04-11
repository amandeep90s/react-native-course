import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput placeholder="Your course goal!" style={styles.textInput} />
				<Button title="Add Goal" />
			</View>
			<View>
				<Text>List of goals...</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 50,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#ccc",
		width: "80%",
		marginRight: 9,
		padding: 8,
	},
});
