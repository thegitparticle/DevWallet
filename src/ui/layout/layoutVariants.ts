import { Dimensions } from "react-native";

const dimensions = {
	fullHeight: Dimensions.get("window").height,
	fullWidth: Dimensions.get("window").width,
};

export const layoutVariants = {
	authScreen: {
		width: dimensions.fullWidth,
		height: dimensions.fullHeight,
		paddingTop: "statusbar",
		backgroundColor: "blue1",
	},
	homeScreen: {
		width: dimensions.fullWidth,
		height: dimensions.fullHeight,
		paddingTop: "statusbar",
		backgroundColor: "blue2",
	},
};
