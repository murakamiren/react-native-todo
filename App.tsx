import { NativeBaseProvider } from "native-base";
import Index from "./components";
import customTheme from "./components/libs/customTheme";

export default function App() {
	return (
		<NativeBaseProvider theme={customTheme}>
			<Index />
		</NativeBaseProvider>
	);
}
