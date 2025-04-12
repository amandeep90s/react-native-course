import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
	const [courseGoals, setCourseGoals] = useState<{ text: string; id: string }[]>([]);

	const addGoalHandler = (enteredGoalText: string) => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: currentCourseGoals.length.toString() },
		]);
	};

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<FlatList
				style={styles.goalsContainer}
				alwaysBounceVertical={false}
				data={courseGoals}
				renderItem={({ item }) => <GoalItem item={item} />}
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
	goalsContainer: {
		flex: 5,
	},
});
