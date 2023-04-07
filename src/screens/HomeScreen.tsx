import BalanceLists from "../components/home/BalanceLists";
import CurrentWallet from "../components/home/CurrentWallet";
import { Layout } from "../ui";

export default function HomeScreen() {
	return (
		<Layout variant="homeScreen">
			<CurrentWallet />
			<BalanceLists />
		</Layout>
	);
}
