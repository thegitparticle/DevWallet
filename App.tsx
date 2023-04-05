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
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { View } from "react-native";
import { Card, Text, theme } from "./src/ui";
import { ThemeProvider } from "@shopify/restyle";
import { Layout } from "./src/ui/layout";
import LandingScreen from "./src/screens/LandingScreen";
import RootStack from "./src/navigation/RootStack";

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

			<StatusBar style="light" />
		</ThemeProvider>
	);
}
