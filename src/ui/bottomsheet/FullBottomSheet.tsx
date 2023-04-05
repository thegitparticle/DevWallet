import { Dimensions, View } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../theme/colors";

const dimensions = {
	fullHeight: Dimensions.get("window").height,
	fullWidth: Dimensions.get("window").width,
};

export interface FullBottomSheetProps {
	children: React.ReactNode;
	isVisible: boolean;
	onBackdropPress: () => void;
}

export default function FullBottomSheet(props: FullBottomSheetProps) {
	return (
		<Modal
			style={{
				width: dimensions.fullWidth,
				bottom: 0,
				margin: 0,
				justifyContent: "center",
			}}
			backdropOpacity={1}
			isVisible={props.isVisible}
			onBackdropPress={props.onBackdropPress}
		>
			<View style={{ backgroundColor: colors.blue6, padding: 20 }}>
				{props.children}
			</View>
		</Modal>
	);
}
