import { useEffect } from "react";
import CreatingWalletComponent from "../../components/newwallet/CreatingWalletComponent";
import { generateNewWallet } from "../../helpers";
import { useLandingStackNavigation } from "../../navigation/types";
import { Layout } from "../../ui";

export default function CreateWalletScreen() {
	const navigaton = useLandingStackNavigation();

	useEffect(() => {
		generateNewWallet().then((wallet) => {
			console.log(wallet);

			// set the wallet in the state

			// navigate to the seed phrase save screen
			navigaton.navigate("ShowSeedPhraseScreen", {
				seedPhrase:
					"hey satoshi we are building better chains to take over the world",
			});
		});
	}, []);

	return (
		<Layout
			variant="authScreen"
			style={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<CreatingWalletComponent />
		</Layout>
	);
}
