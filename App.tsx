import {
	KumbhSans_100Thin,
	KumbhSans_200ExtraLight,
	KumbhSans_300Light,
	KumbhSans_400Regular,
	KumbhSans_500Medium,
	KumbhSans_600SemiBold,
	KumbhSans_700Bold,
	KumbhSans_800ExtraBold,
	KumbhSans_900Black,
} from "@expo-google-fonts/kumbh-sans";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import RootStack from "./src/navigation/RootStack";
import { theme } from "./src/ui";
import { toastConfig } from "./src/ui/alert";

SplashScreen.preventAutoHideAsync();

export default function App() {
	let [fontsLoaded] = useFonts({
		KumbhSans_100Thin,
		KumbhSans_200ExtraLight,
		KumbhSans_300Light,
		KumbhSans_400Regular,
		KumbhSans_500Medium,
		KumbhSans_600SemiBold,
		KumbhSans_700Bold,
		KumbhSans_800ExtraBold,
		KumbhSans_900Black,
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<ThemeProvider theme={theme}>
			<View onLayout={onLayoutRootView} />
			<RootStack />
			<Toast config={toastConfig} />
			<StatusBar style="light" />
		</ThemeProvider>
	);
}
