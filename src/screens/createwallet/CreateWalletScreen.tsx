import { useEffect } from "react";
import CreatingWalletComponent from "../../components/newwallet/CreatingWalletComponent";
import { generateNewWallet } from "../../helpers";
import { useLandingStackNavigation } from "../../navigation/types";
import { Layout } from "../../ui";
import { useLiveWalletsState } from "../../state";

export default function CreateWalletScreen() {
	const navigaton = useLandingStackNavigation();
	const liveWalletsState = useLiveWalletsState();

	useEffect(() => {
		// set timeout delay cuz in lower end devices, this starts before screen totally renders and freezes the UI
		setTimeout(() => {
			generateNewWallet().then((response) => {
				// set the wallet in the state
				liveWalletsState.addWallet(response.newWalletDetails);

				// navigate to the seed phrase save screen
				navigaton.navigate("ShowSeedPhraseScreen", {
					address: response.newWalletDetails.address,
					seedPhrase: response.newWalletDetails.mnemonicPhrase,
				});
			});
		}, 1000);
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
