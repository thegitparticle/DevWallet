import { Image, View } from "react-native";
import { Text, TextButton } from "../../ui";
import { useTheme } from "@shopify/restyle";
import { Web3WalletTypes } from "@walletconnect/web3wallet";
import { web3wallet } from "../../helpers/web3WalletConfig";
import { getSdkError } from "@walletconnect/utils";
import { ConnectedDappDetails, useConnectedDappsState } from "../../state";
import { SessionTypes } from "@walletconnect/types";

export interface ConnectRequestSheetProps {
	proposal: Web3WalletTypes.SessionProposal | null;
	walletAddress: string;
}

export default function ConnectRequestSheet(props: ConnectRequestSheetProps) {
	const theme = useTheme();

	const cancelRequest = () => {
		web3wallet.rejectSession({
			id: props.proposal!.id,
			reason: getSdkError("USER_REJECTED_METHODS"),
		});
	};

	const acceptRequest = async () => {
		const namespaces: SessionTypes.Namespaces = {};

		const requiredNamespaces = props.proposal!.params.requiredNamespaces;

		Object.keys(requiredNamespaces).forEach((key) => {
			const accounts: string[] = [];

			accounts.push(`eip155:5:${props.walletAddress}`);

			namespaces[key] = {
				accounts,
				methods: requiredNamespaces[key].methods,
				events: requiredNamespaces[key].events,
			};
		});

		await web3wallet
			.approveSession({
				id: props.proposal ? props.proposal.id : 0,
				namespaces: namespaces,
			})
			.then((session) => {
				const dappDetails: ConnectedDappDetails = {
					name: session.peer.metadata.name,
					icon: session.peer.metadata.icons[0],
					description: session.peer.metadata.description,
					dappKey: session.peer.publicKey,
					topic: session.topic,
					url: session.peer.metadata.url,
				};

				useConnectedDappsState.setState((state) => ({
					dapps: [...state.dapps, dappDetails],
				}));
			})
			.catch((error) => {
				console.log("error approving session", error);
			});
	};

	return (
		<View>
			<Text variant="heading_large" color="blue12">
				Connection Request
			</Text>
			<Image
				source={{
					uri: "https://github.com/ethereum-optimism/brand-kit/blob/main/assets/images/Profile-Logo.png",
				}}
				style={{ width: 100, height: 100, borderRadius: 50 }}
			/>
			<Text variant="body_large" color="blue12" opacity={0.5}>
				You have a connection request from:{" "}
			</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					marginHorizontal: theme.spacing.$4,
					marginVertical: theme.spacing.$2,
				}}
			>
				<TextButton
					variant="outlined"
					label="Cancel"
					onPress={() => cancelRequest()}
					style={{ width: "45%" }}
				/>
				<TextButton
					variant="secondary"
					label="Connect"
					onPress={() => acceptRequest()}
					style={{ width: "45%" }}
				/>
			</View>
		</View>
	);
}
