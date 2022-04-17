import { extendTheme } from "native-base";

const config = {
	useSystemColorMode: false,
	initialColorMode: "light",
};

const customTheme = extendTheme({ config });

export default customTheme;
