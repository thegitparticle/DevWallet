// @ts-expect-error - `@env` is a virtualised module via Babel config.
import { WALLETCONNECT_PROJECT_ID } from "@env";
import { Core } from "@walletconnect/core";
import Client, { Web3Wallet } from "@walletconnect/web3wallet";
import { SessionTypes } from "@walletconnect/types";
import { LiveWalletDetails } from "../state";
import { ConnectRequestSheetProps } from "../components/connect/ConnectRequestSheet";

const core = new Core({
	projectId: WALLETCONNECT_PROJECT_ID,
});

export let web3wallet: Client;
export let showConnectionRequestSheet: boolean = false;
export let connectionRequestSheetDappDetails: ConnectRequestSheetProps;

export async function web3walletConfig() {
	web3wallet = await Web3Wallet.init({
		core,
		metadata: {
			name: "Dev Wallet",
			description: "a no-frills wallet for developers",
			url: "https://devwallet.in",
			icons: ["https://i.postimg.cc/htrktKHF/stapleverse-pegion.png"],
		},
	});
}
