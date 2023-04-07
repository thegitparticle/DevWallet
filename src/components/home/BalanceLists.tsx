import { Dimensions, ScrollView, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useEffect, useMemo, useState } from "react";
import { Text } from "../../ui";
import { useTheme } from "@shopify/restyle";

export default function BalanceLists() {
	const theme = useTheme();

	const GoerliBalances = useMemo(
		() =>
			function Goerli() {
				useEffect(() => {
					console.log("goerli balances");
				}, []);

				return (
					<Text variant="heading_large" ellipsizeMode="tail">
						goerli balances
					</Text>
				);
			},
		[]
	);

	const MumbaiBalances = useMemo(
		() =>
			function Mumbai() {
				useEffect(() => {
					console.log("mumbai balances");
				}, []);

				return (
					<Text variant="heading_large" ellipsizeMode="tail">
						mumbai balances
					</Text>
				);
			},
		[]
	);

	const renderScene = SceneMap({
		goerli: GoerliBalances,
		mumbai: MumbaiBalances,
	});

	const layout = useWindowDimensions();

	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: "goerli", title: "Goerli" },
		{ key: "mumbai", title: "Mumbai" },
	]);

	const renderTabBar = (props: any) => (
		<TabBar
			{...props}
			indicatorStyle={{ height: 0 }}
			renderLabel={({ route, focused, color }) => (
				<Text
					variant="button_large"
					color="off_light"
					opacity={focused ? 1 : 0.5}
				>
					{route.title}
				</Text>
			)}
			style={{
				backgroundColor: theme.colors.blue3,
				borderRadius: theme.spacing.$3,
			}}
		/>
	);

	return (
		<TabView
			navigationState={{ index, routes }}
			renderTabBar={renderTabBar}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width }}
			style={{
				marginHorizontal: theme.spacing.$4,
				marginVertical: theme.spacing.$2,
			}}
		/>
	);
}
