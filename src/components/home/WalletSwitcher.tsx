import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { useAuthState, useLiveWalletsState } from "../../state";
import { SmallBottomSheet, Text } from "../../ui";

export default function WalletSwitcher() {
	const theme = useTheme();
	const liveWalletsState = useLiveWalletsState();
	const authState = useAuthState();

	const [val, setVal] = useState(liveWalletsState.wallets[0].address);
	// const [val, setVal] = useState(authState.authDetails.primaryAddress);

	const [isSwitcherSheetVisible, setSwitcherSheetVisible] =
		useState<boolean>(false);

	const openSheet = () => setSwitcherSheetVisible(true);
	const closeSheet = () => setSwitcherSheetVisible(false);

	const WalletItem = ({ address }: { address: string }) => {
		return (
			<Pressable
				onPress={() => {
					setVal(address);
					closeSheet();
				}}
			>
				<Text variant="button_large" marginHorizontal="$2">
					{address}
				</Text>
			</Pressable>
		);
	};

	return (
		<>
			<Pressable
				onPress={() => openSheet()}
				style={{
					borderColor: theme.colors.blue6,
					borderRadius: 15,
					padding: theme.spacing.$3,
					borderWidth: 1,
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<Text variant="button_large" marginHorizontal="$2">
					{val.slice(0, 6) + "..." + val.slice(-4)}
				</Text>
				<Ionicons
					name="chevron-down"
					size={20}
					color={theme.colors.blue12}
				/>
			</Pressable>
			<SmallBottomSheet
				isVisible={isSwitcherSheetVisible}
				onBackdropPress={closeSheet}
			>
				<Text variant="heading_large" color="blue12">
					your wallets
				</Text>
				{liveWalletsState.wallets.map((wallet, key) => {
					return <WalletItem key={key} address={wallet.address} />;
				})}
			</SmallBottomSheet>
		</>
	);
}
