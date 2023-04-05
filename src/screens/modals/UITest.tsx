import React from "react";
import { Card, Text, Layout } from "../../ui";
import IconButton from "../../ui/button/IconButton";
import ButtonUI from "../../ui/button/TextButton";
import { ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Divider } from "../../ui/divider";
import Toast from "react-native-toast-message";
import { toastConfig } from "../../ui";

export default function UITest() {
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
			<Toast config={toastConfig} />
		</Layout>
	);
}
