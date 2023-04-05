import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateWalletScreen from "../screens/createwallet/CreateWalletScreen";
import ShowSeedPhraseScreen from "../screens/createwallet/ShowSeedPhraseScreen";
import LandingScreen from "../screens/LandingScreen";
import UITest from "../screens/modals/UITest";

const Stack = createNativeStackNavigator();

export default function LandingStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="LandingScreen"
				component={LandingScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="CreateWalletScreen"
				component={CreateWalletScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ShowSeedPhraseScreen"
				component={ShowSeedPhraseScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="UITest"
				component={UITest}
				options={{
					headerShown: false,
					gestureEnabled: true,
					gestureDirection: "vertical",
					presentation: "modal",
				}}
			/>
		</Stack.Navigator>
	);
}
