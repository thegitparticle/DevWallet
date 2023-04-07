import { useTheme } from "@shopify/restyle";
import { ActivityIndicator } from "react-native";

interface SpinnerProps {
	size?: "small" | "large";
	variant: "bright" | "neutral";
}

export const Spinner = ({ size = "large", variant }: SpinnerProps) => {
	const theme = useTheme();
	const color =
		variant === "bright" ? theme.colors.blue9 : theme.colors.off_light;
	return <ActivityIndicator size={size} color={color} />;
};
