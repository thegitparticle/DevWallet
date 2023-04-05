import { createTheme } from "@shopify/restyle";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { textVariants } from "../text";
import { cardVariants } from "../card";
import { layoutVariants } from "../layout";

const theme = createTheme({
	colors: colors,
	spacing: spacing,
	textVariants: textVariants,
	cardVariants: cardVariants,
	layoutVariants: layoutVariants,
});

export type Theme = typeof theme;
export default theme;
