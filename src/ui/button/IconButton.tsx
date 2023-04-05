import {
	VariantProps,
	createRestyleComponent,
	createVariant,
} from "@shopify/restyle";
import { Pressable, PressableProps } from "react-native";
import { Theme } from "../theme/theme";

type RestyleProps = VariantProps<Theme, "buttonVariants">;

type IconButtonProps = PressableProps &
	RestyleProps & {
		onPress: () => void;
		icon: JSX.Element;
	};

const IconButtonComponent = ({ icon, onPress, ...rest }: IconButtonProps) => {
	return (
		<Pressable onPress={onPress} {...rest}>
			{icon}
		</Pressable>
	);
};

const IconButton = createRestyleComponent<
	VariantProps<Theme, "buttonVariants"> &
		React.ComponentProps<typeof IconButtonComponent>,
	Theme
>([createVariant({ themeKey: "buttonVariants" })], IconButtonComponent);

export default IconButton;
