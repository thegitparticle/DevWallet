import * as Clipboard from "expo-clipboard";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import SeedPhraseComponent from "../../components/newwallet/SeedPhraseComponent";
import { useAuthState } from "../../state";
import { Layout, TextButton } from "../../ui";

export default function ShowSeedPhraseScreen({ route }: any) {
	const authState = useAuthState();
	const { seedPhrase, address } = route.params;

	const copyToClipboard = async () => {
		await Clipboard.setStringAsync(seedPhrase);
	};

	return (
		<Layout
			variant="authScreen"
			style={{
				justifyContent: "flex-end",
				alignItems: "center",
			}}
		>
			<View style={{ marginVertical: "10%" }} />
			<SeedPhraseComponent seedPhrase={seedPhrase} />
			<TextButton
				variant="outlined"
				onPress={() => {
					copyToClipboard();
					Toast.show({
						type: "success",
						text1: "copied seed phrase",
					});
				}}
				label="copy seed phrase"
				style={{ marginVertical: "10%" }}
			/>
			<TextButton
				variant="primary"
				onPress={() => {
					// change auth state to true
					authState.setAuthDetails({
						primaryAddress: address,
						loggedIn: true,
					});
				}}
				label="i've saved it"
				style={{ marginVertical: "10%" }}
			/>
		</Layout>
	);
}
