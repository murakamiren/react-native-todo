import { AnimatePresence, MotiView } from "moti";
import { Box, Button, Center, VStack } from "native-base";
import { useState, VFC } from "react";

const AnimatedTest: VFC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const handleVisible = () => {
		setIsVisible(!isVisible);
	};

	return (
		<VStack space={6}>
			<AnimatePresence>
				{isVisible && (
					<MotiView
						from={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ type: "timing", duration: 500 }}
					>
						<Box w={20} h={20} rounded="md" bgColor="success.500" />
					</MotiView>
				)}
			</AnimatePresence>
			<Center>
				<Button w={24} colorScheme="success" onPress={handleVisible}>
					animated
				</Button>
			</Center>
		</VStack>
	);
};

export default AnimatedTest;
