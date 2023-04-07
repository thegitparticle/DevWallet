import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface AuthDetails {
	primaryAddress: string;
	loggedIn: boolean;
}

interface AuthState {
	authDetails: AuthDetails;
	setAuthDetails: (authDetails: AuthDetails) => void;
	clearHistory: () => void;
}

export const useAuthState = create<AuthState>()(
	devtools(
		persist(
			(set) => ({
				authDetails: { primaryAddress: "", loggedIn: false },
				setAuthDetails: (authDetails: AuthDetails) =>
					set({ authDetails: authDetails }),
				clearHistory: () =>
					set({
						authDetails: { primaryAddress: "", loggedIn: false },
					}),
			}),
			{
				name: "auth-state",
				storage: createJSONStorage(() => AsyncStorage),
			}
		)
	)
);
