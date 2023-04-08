import { useConnectedDappsState } from "../../state";
import { Text, Layout } from "../../ui";

export default function ConnectedDappsScreen() {
	const connectedDappsState = useConnectedDappsState();

	return (
		<Layout
			variant="authScreen"
			style={{
				alignItems: "center",
			}}
		>
			<Text variant="body_small" color="off_light">
				connected dapps will be shown here
			</Text>
			{connectedDappsState.dapps.map((dapp) => {
				return (
					<Text
						key={dapp.dappKey}
						variant="body_small"
						color="positive"
						marginVertical="$2"
					>
						{dapp.name}
					</Text>
				);
			})}
		</Layout>
	);
}
