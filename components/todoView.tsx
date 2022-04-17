import { AnimatePresence } from "moti";
import { AddIcon, Box, Center, Input, ScrollView, Text, VStack } from "native-base";
import { useState, VFC } from "react";
import TodoList from "./todoList";
import { todoType } from "./types/todoType";

const initialTasks: todoType[] = [
	{
		id: 1,
		text: "test task",
		isDone: false,
		isDelete: false,
	},
	{
		id: 2,
		text: "test task two",
		isDone: false,
		isDelete: false,
	},
];

const TodoView: VFC = () => {
	const [tasks, setTasks] = useState<todoType[]>(initialTasks);
	const [text, setText] = useState("");

	const handleText = (e: string) => {
		setText(e);
	};

	const addTodo = () => {
		console.log(text);
		setTasks((preTodo) => [
			...preTodo,
			{
				id: preTodo.slice(-1)[0].id + 1,
				text: text,
				isDone: false,
				isDelete: false,
			},
		]);
		setText(() => "");
	};

	return (
		<Box>
			<Text mx={4} mb={2} fontSize="xl" fontWeight="semibold">
				your tasks
			</Text>
			<VStack space={4}>
				<ScrollView>
					<VStack space={2}>
						<AnimatePresence>
							{tasks.map((task) => (
								<TodoList key={task.id} text={task.text} />
							))}
						</AnimatePresence>
					</VStack>
				</ScrollView>
				<Center>
					<Input
						w="80%"
						placeholder="add task!"
						size="lg"
						InputLeftElement={<AddIcon size={3} ml={2} />}
						value={text}
						onChangeText={(e) => handleText(e)}
						onEndEditing={addTodo}
					/>
				</Center>
			</VStack>
		</Box>
	);
};

export default TodoView;
