import { Image, View } from "react-native";
import { Text, TextButton } from "../../ui";
import { useTheme } from "@shopify/restyle";

export default function ConnectRequestSheet() {
	const theme = useTheme();

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
					onPress={() => console.log("no")}
					style={{ width: "45%" }}
				/>
				<TextButton
					variant="secondary"
					label="Connect"
					onPress={() => console.log("yes")}
					style={{ width: "45%" }}
				/>
			</View>
		</View>
	);
}
