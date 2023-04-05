import {
	VariantProps,
	createRestyleComponent,
	createVariant,
} from "@shopify/restyle";
import { Pressable, PressableProps } from "react-native";
import { Text } from "../text";
import { Theme } from "../theme/theme";

type RestyleProps = VariantProps<Theme, "buttonVariants">;

type ButtonProps = PressableProps &
	RestyleProps & {
		onPress: () => void;
		label: string;
	};

const ButtonComponent = ({ label, onPress, ...rest }: ButtonProps) => {
	return (
		<Pressable onPress={onPress} {...rest}>
			<Text variant="button_large">{label}</Text>
		</Pressable>
	);
};

const TextButton = createRestyleComponent<
	VariantProps<Theme, "buttonVariants"> &
		React.ComponentProps<typeof ButtonComponent>,
	Theme
>([createVariant({ themeKey: "buttonVariants" })], ButtonComponent);

export default TextButton;
