import { Spinner, Text } from "../../ui";

export default function CreatingWalletComponent() {
	return (
		<>
			<Spinner variant="bright" size="large" />
			<Text variant="title_small" color="blue12">
				creating wallet ...
			</Text>
		</>
	);
}
