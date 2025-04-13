import React, { PropsWithChildren } from "react";
import { Text, View } from "react-native";

type Props = PropsWithChildren<{}>;

export default function PrimaryButton({ children }: Readonly<Props>) {
	return (
		<View>
			<Text>{children}</Text>
		</View>
	);
}
