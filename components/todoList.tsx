import { MotiText, MotiView } from "moti";
import { Box, Checkbox, HStack, Text } from "native-base";
import { useState, VFC } from "react";

type todoListProps = {
	text: string;
};

const TodoList: VFC<todoListProps> = (props) => {
	const [isDone, setIsDone] = useState<boolean>(false);

	const handleIsDone = () => {
		setIsDone((pre) => !pre);
	};

	return (
		<MotiView
			from={{ opacity: 0, translateY: 30 }}
			animate={{ opacity: 1, translateY: 0 }}
			transition={{ type: "timing", duration: 75, translateY: { type: "spring" } }}
		>
			<Box>
				<HStack alignItems="center" space={4} mx={4}>
					<Checkbox value="todoCheck" accessibilityLabel="todoCheck" onChange={handleIsDone} />
					<Text fontSize="lg">{props.text}</Text>
				</HStack>
			</Box>
		</MotiView>
	);
};

export default TodoList;
