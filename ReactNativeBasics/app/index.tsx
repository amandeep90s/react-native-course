import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";
import { useState } from "react";
import { Button, FlatList, StatusBar, StyleSheet, View } from "react-native";

export default function Index() {
	const [courseGoals, setCourseGoals] = useState<{ text: string; id: string }[]>([]);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const addGoalHandler = (enteredGoalText: string) => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: currentCourseGoals.length.toString() },
		]);
	};

	const deleteGoalHandler = (id: string) => {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== id);
		});
	};

	const showGoalModalHandler = () => {
		setIsModalVisible(true);
	};

	const hideGoalModalHandler = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="#311b6b" />
			<View style={styles.appContainer}>
				<Button title="Add new goal" color="#5e0acc" onPress={showGoalModalHandler} />
				<GoalInput onAddGoal={addGoalHandler} visible={isModalVisible} onClose={hideGoalModalHandler} />
				<FlatList
					style={styles.goalsContainer}
					alwaysBounceVertical={false}
					data={courseGoals}
					renderItem={({ item }) => <GoalItem item={item} onDelete={deleteGoalHandler} />}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 24,
		paddingHorizontal: 16,
		backgroundColor: "#1e085a",
	},
	goalsContainer: {
		flex: 5,
	},
});
