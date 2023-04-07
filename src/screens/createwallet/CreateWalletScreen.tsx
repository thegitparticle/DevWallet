import { Text, Layout } from "../../ui";

export default function CreateWalletScreen() {
	return (
		<Layout
			variant="authScreen"
			style={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text variant="title_small" color="blue12">
				create wallet screen
			</Text>
		</Layout>
	);
}
