import { useTheme } from "@shopify/restyle";
import { View } from "react-native";
import { TextButton } from "../../ui";
import { useHomeStackNavigation } from "../../navigation/types";

export default function Actions() {
	const navigation = useHomeStackNavigation();
	const theme = useTheme();

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
			<TextButton
				variant="secondary"
				label="Connect"
				onPress={() => navigation.navigate("ScanAndConnectScreen")}
				style={{ width: "45%" }}
			/>
			<TextButton
				variant="secondary"
				label="Dapps"
				onPress={() => navigation.navigate("ConnectedDappsScreen")}
				style={{ width: "45%" }}
			/>
		</View>
	);
}
