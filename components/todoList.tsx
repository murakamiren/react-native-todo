import { MotiView } from "moti";
import { Box, Checkbox, HStack, Icon, IconButton, Text, useToast } from "native-base";
import React, { useEffect, useState, VFC } from "react";
import { todoType } from "./types/todoType";

import { MaterialIcons } from "@expo/vector-icons";

type todoListProps = {
	id: number;
	text: string;
	tasks: todoType[];
	setTasks: React.Dispatch<React.SetStateAction<todoType[]>>;
};

const TodoList: VFC<todoListProps> = (props) => {
	const [isDone, setIsDone] = useState<boolean>(false);
	const toast = useToast();

	useEffect(() => {
		const editTodo = props.tasks;
		editTodo[props.id - 1].isDone = isDone;
		props.setTasks(editTodo);
	}, [isDone]);

	const handleIsDelete = () => {
		const editTodo = [...props.tasks];
		if (editTodo[props.id - 1].isDone) {
			editTodo[props.id - 1].isDelete = true;
			props.setTasks(editTodo);
			console.log(editTodo);
			console.log("deleted!");
			toast.show({
				title: "deleted!",
				placement: "bottom",
				description: "this task is successfully deleted",
				bgColor: "success.500",
				size: "lg",
			});
		} else {
			console.log("this task is not done yet!");
			toast.show({
				title: "cant delete",
				placement: "bottom",
				description: "this task is not done yet!",
				bgColor: "error.500",
				size: "lg",
			});
		}
	};

	return (
		<MotiView
			from={{ opacity: 0, translateY: 30 }}
			animate={{ opacity: 1, translateY: 0 }}
			exit={{ opacity: 0, translateX: 10 }}
			transition={{ type: "timing", duration: 150, translateY: { type: "spring" }, translateX: { type: "spring" } }}
			style={{ paddingVertical: 6 }}
		>
			<Box>
				<HStack alignItems="center" space={6} mx={4} position="relative">
					<Checkbox value="todoCheck" accessibilityLabel="todoCheck" onChange={setIsDone} isChecked={isDone} />
					<Text fontSize="xl" opacity={isDone ? "50" : "100"} strikeThrough={isDone}>
						{props.text}
					</Text>
					<IconButton
						icon={<Icon as={MaterialIcons} name="delete" size={6} />}
						position="absolute"
						right="0"
						colorScheme="error"
						onPress={handleIsDelete}
					/>
				</HStack>
			</Box>
		</MotiView>
	);
};

export default TodoList;
