import StartGame from "@/screens/StartGame";
import { StatusBar } from "expo-status-bar";

export default function Index() {
	return (
		<>
			<StartGame />
			<StatusBar style="auto" />
		</>
	);
}
