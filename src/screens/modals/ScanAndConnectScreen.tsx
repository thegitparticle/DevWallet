import { useEffect, useState } from "react";
import { useAuthState, useLiveWalletsState } from "../../state";
import { SmallBottomSheet, Text } from "../../ui";
import { Layout } from "../../ui/layout";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useWindowDimensions } from "react-native";
import Modal from "react-native-modal";
import ConnectRequestSheet from "../../components/connect/ConnectRequestSheet";
import { web3wallet } from "../../helpers/web3WalletConfig";
import { parseUri } from "@walletconnect/utils";
import { Web3WalletTypes } from "@walletconnect/web3wallet";

export default function ScanAndConnectScreen() {
	const liveWalletsState = useLiveWalletsState();
	const authState = useAuthState();

	const layout = useWindowDimensions();

	const [scanned, setScanned] = useState(false);

	const [showConnectionRequestSheet, setShowConnectionRequestSheet] =
		useState(false);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setShowConnectionRequestSheet(true);
	// 	}, 3000);
	// }, []);

	const [proposal, setProposal] =
		useState<Web3WalletTypes.SessionProposal | null>(null);

	const [permission, requestPermission] = BarCodeScanner.usePermissions();

	async function handleBarCodeScanned({ type, data }) {
		setScanned(true);

		const parsedData = parseUri(data);

		if (parsedData.version === 2) {
			await web3wallet.core.pairing.pair({ uri: data });
		} else {
			console.log("wc v1 needed, not supported");
			// setupWalletConnectV1({
			// 	uri: data,
			// 	liveWallets: liveWalletsState.wallets,
			// });
		}

		// console.log("scanned data", data);

		// setShowConnectionRequestSheet(true);

		// const parsedData = parseUri(data);

		// if (parsedData.version === 2) {
		// 	await web3wallet.core.pairing.pair({ uri: data });
		// } else {
		// 	console.log("wc v1 needed");
		// 	setupWalletConnectV1({
		// 		uri: data,
		// 		liveWallets: liveWalletsState.wallets,
		// 	});
		// }
	}

	web3wallet.on("session_proposal", async (proposal) => {
		console.log("web3wallet listener", "session_proposal triggered");

		setProposal(proposal);
		setShowConnectionRequestSheet(true);
	});

	if (!permission) {
		BarCodeScanner.requestPermissionsAsync();
		return (
			<Text variant="body_large" color="blue12">
				Requesting for camera permission
			</Text>
		);
	}
	if (!permission.granted) {
		BarCodeScanner.requestPermissionsAsync();
		return (
			<Text variant="body_large" color="blue12">
				No access to camera
			</Text>
		);
	}

	return (
		<Layout
			variant="homeScreen"
			style={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={{
					height: layout.height * 0.5,
					width: layout.width,
				}}
			/>
			<Text variant="body_large" color="blue12" marginVertical="$2">
				Connect wallet
			</Text>

			<SmallBottomSheet
				isVisible={showConnectionRequestSheet}
				onBackdropPress={() => setShowConnectionRequestSheet(false)}
			>
				{/* <ConnectRequestSheet /> */}
				<ConnectRequestSheet
					proposal={proposal}
					walletAddress={liveWalletsState.wallets[0].address}
				/>
			</SmallBottomSheet>
		</Layout>
	);
}
