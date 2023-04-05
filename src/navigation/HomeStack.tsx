import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ScanAndConnectScreen from "../screens/modals/ScanAndConnectScreen";
import UITest from "../screens/modals/UITest";
import ConnectedDappsScreen from "../screens/modals/ConnectedDappsScreen";
import WalletDetailsScreen from "../screens/modals/WalletDetailsScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ScanAndConnectScreen"
				component={ScanAndConnectScreen}
				options={{
					headerShown: false,
					gestureEnabled: true,
					gestureDirection: "vertical",
					presentation: "modal",
				}}
			/>
			<Stack.Screen
				name="WalletDetailsScreen"
				component={WalletDetailsScreen}
				options={{
					headerShown: false,
					gestureEnabled: true,
					gestureDirection: "vertical",
					presentation: "modal",
				}}
			/>
			<Stack.Screen
				name="ConnectedDappsScreen"
				component={ConnectedDappsScreen}
				options={{
					headerShown: false,
					gestureEnabled: true,
					gestureDirection: "vertical",
					presentation: "modal",
				}}
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
