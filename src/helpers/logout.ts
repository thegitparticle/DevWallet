import AsyncStorage from "@react-native-async-storage/async-storage";

export const logout = async () => {
	try {
		await AsyncStorage.clear();
	} catch (e) {
		console.log("error clearing storage & hence logging out", e);
	}

	return true;
};
