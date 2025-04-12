import { StyleSheet, Text, View } from "react-native";

type Props = {
	item: {
		text: string;
		id: string;
	};
};

export default function GoalItem({ item }: Readonly<Props>) {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalText}>{item.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
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
