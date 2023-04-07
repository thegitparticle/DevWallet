import { useTheme } from "@shopify/restyle";
import { Text } from "../../ui";
import { View } from "react-native";

interface SeedPhraseComponentProps {
	seedPhrase: string;
}

export default function SeedPhraseComponent(props: SeedPhraseComponentProps) {
	const theme = useTheme();

	const phraseArray: string[] = props.seedPhrase.split(" ");

	const OneWord = (word: string, id: number, second: boolean) => {
		return (
			<View
				key={id}
				style={{
					paddingHorizontal: 20,
					paddingVertical: 10,
					backgroundColor: theme.colors.blue9,
					borderRadius: 100,
					marginVertical: 10,
				}}
			>
				<Text variant="button_large" color="off_light">
					{String(id + 1 + (second ? 6 : 0))}. {word}
				</Text>
			</View>
		);
	};

	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				width: "80%",
			}}
		>
			<View
				style={{
					flexDirection: "column",
				}}
			>
				{phraseArray
					.slice(0, 6)
					.map((word, id) => OneWord(word, id, false))}
			</View>
			<View
				style={{
					flexDirection: "column",
				}}
			>
				{phraseArray
					.slice(6, 12)
					.map((word, id) => OneWord(word, id, true))}
			</View>
		</View>
	);
}
