import { NativeBaseProvider } from "native-base";
import Index from "./components";

export default function App() {
	return (
		<NativeBaseProvider>
			<Index />
		</NativeBaseProvider>
	);
}
