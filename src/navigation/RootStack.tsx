// import { useAuthState } from "../state/authState";
// import { useLiveWalletsState } from "../state/liveWalletsState";
// import {
// 	setupWalletConnectV1,
// 	walletConnectV1,
// } from "../utils/walletConnectv1Config";
// import { web3walletSetup } from "../utils/web3WalletConfig";
// import AuthStack from "./AuthStack";

import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import LandingStack from "./LandingStack";
import Toast from "react-native-toast-message";
import { toastConfig } from "../ui/alert/toastConfig";
import { useAuthState } from "../state";
import { web3walletConfig } from "../helpers/web3WalletConfig";

export default function RootStack() {
	const authState = useAuthState();
	// const liveWalletsState = useLiveWalletsState();

	web3walletConfig();

	return (
		<NavigationContainer>
			{authState.authDetails.loggedIn ? <HomeStack /> : <LandingStack />}
			<Toast config={toastConfig} />
		</NavigationContainer>
	);
}
