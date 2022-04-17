import { Box, Text } from "native-base";
import { VFC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Index: VFC = () => {
	return (
		<Box>
			<SafeAreaView>
				<Text>hello world</Text>
			</SafeAreaView>
		</Box>
	);
};

export default Index;
