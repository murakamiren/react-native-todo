import { Box, Center, StatusBar, Text, useColorModeValue } from "native-base";
import { VFC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedTest from "./animatedTest";
import ColorModeSwitch from "./colorModeSwitch";
import TodoView from "./todoView";

const Index: VFC = () => {
	return (
		<Box flex={1} bgColor={useColorModeValue("white", "coolGray.800")}>
			<SafeAreaView style={{ flex: 1 }}>
				<Center mb={6}>
					<Text fontSize="xl" fontWeight="semibold">
						react native todo
					</Text>
				</Center>
				{/* <AnimatedTest /> */}
				<TodoView />
				<ColorModeSwitch />
			</SafeAreaView>
			<StatusBar />
		</Box>
	);
};

export default Index;
