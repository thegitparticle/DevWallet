import { useAuthState, useLiveWalletsState } from "../../state";
import { Text, Layout } from "../../ui";
import QRCode from "react-native-qrcode-svg";

export default function WalletDetailsScreen() {
	const liveWalletsState = useLiveWalletsState();
	const authState = useAuthState();

	const mainAddress = authState.authDetails.primaryAddress;

	return (
		<Layout
			variant="authScreen"
			style={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text variant="body_small" color="off_light">
				{mainAddress.substring(0, 6) +
					"..." +
					mainAddress.substring(
						mainAddress.length - 4,
						mainAddress.length
					)}
			</Text>
			<QRCode value={mainAddress} />
		</Layout>
	);
}
