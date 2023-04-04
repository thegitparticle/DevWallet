import { createTheme } from "@shopify/restyle";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { textVariants } from "../text";
import { cardVariants } from "../card";

const theme = createTheme({
	colors: colors,
	spacing: spacing,
	textVariants: textVariants,
	cardVariants: cardVariants,
});

export type Theme = typeof theme;
export default theme;
