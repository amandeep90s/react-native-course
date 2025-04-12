import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
	item: {
		text: string;
		id: string;
	};
	onDelete: (id: string) => void;
};

export default function GoalItem(this: any, { item, onDelete }: Readonly<Props>) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={onDelete.bind(this, item.id)}
				android_ripple={{ color: "#210644" }}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{item.text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "#fff",
		padding: 8,
	},
	pressedItem: {
		opacity: 0.5,
	},
});
