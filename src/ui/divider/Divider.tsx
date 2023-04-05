import {
	VariantProps,
	createRestyleComponent,
	createVariant,
} from "@shopify/restyle";
import { View } from "react-native";
import { Theme } from "../theme/theme";

const Divider = createRestyleComponent<
	VariantProps<Theme, "dividerVariants"> & React.ComponentProps<typeof View>,
	Theme
>([createVariant({ themeKey: "dividerVariants" })], View);

export default Divider;
