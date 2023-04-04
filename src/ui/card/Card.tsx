import {
	VariantProps,
	createBox,
	createRestyleComponent,
	createVariant,
} from "@shopify/restyle";
import { Theme } from "../theme/theme";

const Box = createBox<Theme>();

const Card = createRestyleComponent<
	VariantProps<Theme, "cardVariants"> & React.ComponentProps<typeof Box>,
	Theme
>([createVariant({ themeKey: "cardVariants" })], Box);

export default Card;
