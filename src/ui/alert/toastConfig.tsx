import {
	BaseToast,
	BaseToastProps,
	ErrorToast,
} from "react-native-toast-message";

export const toastConfig = {
	success: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
		<BaseToast
			{...props}
			style={{
				backgroundColor: "green",
				borderLeftWidth: 0,
			}}
			contentContainerStyle={{ paddingHorizontal: 15 }}
			text1Style={{
				fontSize: 15,
				lineHeight: 19,
				fontFamily: "KumbhSans_500Medium",
				color: "#CECECE",
			}}
			text2Style={{
				fontSize: 12,
				lineHeight: 16,
				fontFamily: "KumbhSans_400Regular",
				color: "#CECECE",
			}}
		/>
	),

	error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
		<ErrorToast
			{...props}
			style={{
				backgroundColor: "red",
				borderLeftWidth: 0,
			}}
			contentContainerStyle={{ paddingHorizontal: 15 }}
			text1Style={{
				fontSize: 15,
				lineHeight: 19,
				fontFamily: "KumbhSans_500Medium",
				color: "#CECECE",
			}}
			text2Style={{
				fontSize: 12,
				lineHeight: 16,
				fontFamily: "KumbhSans_400Regular",
				color: "#CECECE",
			}}
		/>
	),
};
