import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import Toast from "react-native-toast-message";
import {
	Card,
	FullBottomSheet,
	Layout,
	SmallBottomSheet,
	Text,
	toastConfig,
} from "../../ui";
import IconButton from "../../ui/button/IconButton";
import ButtonUI from "../../ui/button/TextButton";
import { Divider } from "../../ui/divider";

export default function UITest() {
	const [isVisible, setVisible] = useState<boolean>(false);
	const [isVisibleFull, setVisibleFull] = useState<boolean>(false);

	const openSheet = () => setVisible(true);
	const closeSheet = () => setVisible(false);

	const openSheetFull = () => setVisibleFull(true);
	const closeSheetFull = () => setVisibleFull(false);

	return (
		<Layout
			variant="authScreen"
			style={{
				alignItems: "center",
			}}
		>
			<ScrollView
				style={{ width: "100%" }}
				contentContainerStyle={{
					alignItems: "center",
				}}
			>
				<Text variant="title_small" color="blue12">
					ui test
				</Text>
				<Text
					variant="heading_small"
					color="blue11"
					marginVertical="$2"
				>
					this is text
				</Text>
				<Card variant="fullWidth">
					<Text variant="body_large" color="blue12">
						this is a card
					</Text>
				</Card>
				<ButtonUI
					variant="primary"
					label="this is a button"
					onPress={() => console.log("button pressed")}
					style={{
						marginVertical: 15,
					}}
				/>
				<ButtonUI
					variant="secondary"
					label="error toast"
					onPress={() =>
						Toast.show({
							type: "error",
							text1: "wrong",
							text2: "please try again",
						})
					}
					style={{
						marginVertical: 15,
					}}
				/>
				<ButtonUI
					variant="outlined"
					label="success toast"
					onPress={() =>
						Toast.show({
							type: "success",
							text1: "it seems like worked",
							text2: "now you can do other things",
						})
					}
					style={{
						marginVertical: 15,
					}}
				/>
				<ButtonUI
					variant="primary"
					label="bottomsheet"
					onPress={() => openSheet()}
					style={{
						marginVertical: 15,
					}}
				/>
				<ButtonUI
					variant="primary"
					label="full bottomsheet"
					onPress={() => openSheetFull()}
					style={{
						marginVertical: 15,
					}}
				/>
				<Divider
					variant="horizontal"
					style={{
						width: 50,
						marginVertical: 15,
					}}
				/>
				<Divider
					variant="vertical"
					style={{
						height: 50,
						marginVertical: 15,
					}}
				/>
				<IconButton
					variant="primary"
					icon={
						<Ionicons
							name="md-checkmark-circle"
							size={32}
							color="green"
						/>
					}
					onPress={() => console.log("button pressed")}
					style={{
						marginVertical: 15,
					}}
				/>
			</ScrollView>
			<SmallBottomSheet
				isVisible={isVisible}
				onBackdropPress={closeSheet}
			>
				<Text variant="title_small" color="blue12">
					sheet heading
				</Text>
				<Text
					variant="heading_small"
					color="blue11"
					marginVertical="$2"
				>
					are you sure you wanna?
				</Text>
			</SmallBottomSheet>
			<FullBottomSheet
				isVisible={isVisibleFull}
				onBackdropPress={closeSheetFull}
			>
				<Text variant="title_small" color="blue12">
					sheet heading
				</Text>
				<Text
					variant="heading_small"
					color="blue11"
					marginVertical="$2"
				>
					are you sure you wanna?
				</Text>
			</FullBottomSheet>
			<Toast config={toastConfig} />
		</Layout>
	);
}
