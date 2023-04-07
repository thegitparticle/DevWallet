import { View } from "react-native";
import WalletSwitcher from "./WalletSwitcher";
import { IconButton } from "../../ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@shopify/restyle";
import * as Clipboard from "expo-clipboard";
import { useAuthState } from "../../state";
import { useHomeStackNavigation } from "../../navigation/types";

export default function CurrentWallet() {
	const theme = useTheme();
	const authState = useAuthState();
	const navigation = useHomeStackNavigation();

	const copyToClipboard = async () => {
		await Clipboard.setStringAsync(authState.authDetails.primaryAddress);
	};

	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				marginHorizontal: theme.spacing.$4,
				marginVertical: theme.spacing.$2,
			}}
		>
			<WalletSwitcher />
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<IconButton
					variant="primary"
					icon={
						<Ionicons
							name="ios-copy"
							size={20}
							color={theme.colors.blue12}
						/>
					}
					onPress={() => copyToClipboard()}
					style={{
						marginLeft: theme.spacing.$2,
					}}
				/>
				<IconButton
					variant="primary"
					icon={
						<Ionicons
							name="ios-qr-code"
							size={20}
							color={theme.colors.blue12}
						/>
					}
					onPress={() => navigation.navigate("WalletDetailsScreen")}
					style={{
						marginLeft: theme.spacing.$2,
					}}
				/>
			</View>
		</View>
	);
}
