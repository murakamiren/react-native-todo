import { HStack, MoonIcon, SunIcon, Switch, Text, useColorMode } from "native-base";
import { useState, VFC } from "react";

const ColorModeSwitch: VFC = () => {
	const { colorMode, setColorMode } = useColorMode();
	const [isEnable, setIsEnable] = useState<boolean>(false);

	const handleColorMode = async () => {
		await setIsEnable((pre) => !pre);
		if (isEnable) {
			setColorMode("light");
		} else if (!isEnable) {
			setColorMode("dark");
		}
		// console.log(colorMode, isEnable);
	};
	return (
		<HStack alignItems="center" space={2}>
			<SunIcon size={5} />
			<Switch onValueChange={handleColorMode} value={isEnable} />
			<MoonIcon size={5} />
		</HStack>
	);
};

export default ColorModeSwitch;
