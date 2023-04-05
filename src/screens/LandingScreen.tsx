import { Button } from "react-native";
import { useLandingStackNavigation } from "../navigation/types";
import { Card, Text } from "../ui";
import { Layout } from "../ui/layout";

export default function LandingScreen() {
	const navigation = useLandingStackNavigation();

	return (
		<Layout
			variant="authScreen"
			style={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text variant="title_small" color="blue12">
				landing screen
			</Text>
			<Card variant="fullWidth">
				<Text variant="body_large" color="blue12">
					This is a simple example displaying how to use Restyle
				</Text>
			</Card>
			<Button
				title="ui test"
				onPress={() => navigation.navigate("UITest")}
			/>
		</Layout>
	);
}
