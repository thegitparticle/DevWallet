import { ethers } from "ethers";

export const generateNewWallet = async () => {
	const newWallet = ethers.Wallet.createRandom();

	let newWalletDetails = {
		address: newWallet.address,
		privateKey: newWallet.privateKey,
		mnemonicPhrase: newWallet.mnemonic.phrase,
	};

	return { newWalletDetails };
};
