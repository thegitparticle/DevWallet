import {
	VariantProps,
	createRestyleComponent,
	createVariant,
} from "@shopify/restyle";
import { View } from "react-native";
import { Theme } from "../theme/theme";

const Layout = createRestyleComponent<
	VariantProps<Theme, "layoutVariants"> & React.ComponentProps<typeof View>,
	Theme
>([createVariant({ themeKey: "layoutVariants" })], View);

export default Layout;
