import { Box, Center, Text } from "native-base";
import { VFC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedTest from "./animatedTest";

const Index: VFC = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Center mb={6}>
				<Text fontSize="lg">react native todo</Text>
			</Center>
			<AnimatedTest />
		</SafeAreaView>
	);
};

export default Index;
