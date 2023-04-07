import { useLandingStackNavigation } from "../navigation/types";
import { Text, TextButton, Layout } from "../ui";
import { View, Image } from "react-native";

export default function LandingScreen() {
	const navigation = useLandingStackNavigation();

	return (
		<Layout
			variant="authScreen"
			style={{
				alignItems: "center",
				justifyContent: "flex-end",
			}}
		>
			<View
				style={{
					alignItems: "center",
				}}
			>
				<Image
					source={require("../../assets/dev-wallet-logo.png")}
					resizeMode="contain"
					style={{
						width: 250,
						height: 100,
					}}
				/>
				<Text variant="heading_small" color="blue12" opacity={0.5}>
					a no frills wallet for developers
				</Text>
			</View>
			<TextButton
				variant="primary"
				onPress={() => navigation.navigate("CreateWalletScreen")}
				label="create new wallet"
				style={{ marginVertical: "10%" }}
			/>
		</Layout>
	);
}
