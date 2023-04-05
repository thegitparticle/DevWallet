import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Auth stack types
export type AuthStackParamList = {
	LandingScreen: undefined;
	CreateWalletScreen: undefined;
	ShowSeedPhraseScreen: undefined;
	UITest: undefined;
};

export type LandingStackNavigationProp =
	NativeStackNavigationProp<AuthStackParamList>;

export const useAuthStackNavigation = (): LandingStackNavigationProp =>
	useNavigation<LandingStackNavigationProp>();

//  Home stack types
export type HomeStackParamList = {
	HomeScreen: undefined;
	ScanAndConnectScreen: undefined;
	WalletDetailsScreen: undefined;
	ConnectedDappsScreen: undefined;
	UITest: undefined;
};

export type HomeStackNavigationProp =
	NativeStackNavigationProp<HomeStackParamList>;

export const useHomeStackNavigation = (): HomeStackNavigationProp =>
	useNavigation<HomeStackNavigationProp>();
