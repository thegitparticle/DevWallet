import { Text } from "../../ui";
import { Layout } from "../../ui/layout";

export default function WalletDetailsScreen() {
	return (
		<Layout
			variant="authScreen"
			style={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text variant="title_small" color="blue12">
				wallet details screen
			</Text>
		</Layout>
	);
}
