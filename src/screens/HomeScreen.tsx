import { Text } from "../ui";
import { Layout } from "../ui/layout";

export default function HomeScreen() {
	return (
		<Layout
			variant="homeScreen"
			style={{
				alignItems: "center",
			}}
		>
			<Text variant="title_small" color="blue12">
				home screen
			</Text>
		</Layout>
	);
}
