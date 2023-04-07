import WalletSwitcher from "../components/home/WalletSwitcher";
import { Text } from "../ui";
import { Layout } from "../ui/layout";

export default function HomeScreen() {
	return (
		<Layout
			variant="homeScreen"
			style={{
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<WalletSwitcher />
			<Text variant="title_small" color="blue12">
				home screen
			</Text>
		</Layout>
	);
}
