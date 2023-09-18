import { StyleSheet } from "react-native";
import React from "react";
import { Box, Center, Text } from "native-base";
import { useTheme } from "native-base";
import { ArrowDown2, ArrowRight2 } from "iconsax-react-native";
import Header1 from "../components/Header1";
const Progress = () => {
	const { colors } = useTheme();
	return (
		<Box flex={1}>
			<Header1 title="Tiến độ học tập" />
			<Box alignItems={"center"}>
				<Box
					width={"80%"}
					borderWidth={"1"}
					borderRadius={"9.9"}
					backgroundColor={colors.muted[50]}
					marginTop={"12"}
				>
					<Box
						flexDirection={"row"}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Text padding={"2"}>Rubik 3x3x3 </Text>
						<Box marginRight={"4"}>
							<ArrowDown2
								size={"16"}
								color={colors.muted[500]}
							/>
						</Box>
					</Box>
				</Box>
				<Box
					width={"80%"}
					borderWidth={"1"}
					borderRadius={"9.9"}
					backgroundColor={colors.muted[50]}
					marginTop={"12"}
				>
					<Box
						flexDirection={"row"}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Text padding={"2"}>Rubik 3x3x3 </Text>
						<Box marginRight={"4"}>
							<ArrowDown2
								size={"16"}
								color={colors.muted[500]}
							/>
						</Box>
					</Box>
				</Box>
				<Box
					width={"80%"}
					borderWidth={"1"}
					borderRadius={"9.9"}
					backgroundColor={colors.muted[50]}
					marginTop={"12"}
				>
					<Box
						flexDirection={"row"}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Text padding={"2"}>Rubik 3x3x3 </Text>
						<Box marginRight={"4"}>
							<ArrowDown2
								size={"16"}
								color={colors.muted[500]}
							/>
						</Box>
					</Box>
				</Box>
				<Box
					width={"80%"}
					borderWidth={"1"}
					borderRadius={"9.9"}
					backgroundColor={colors.muted[50]}
					marginTop={"12"}
				>
					<Box
						flexDirection={"row"}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Text padding={"2"}>Rubik 3x3x3 </Text>
						<Box marginRight={"4"}>
							<ArrowDown2
								size={"16"}
								color={colors.muted[500]}
							/>
						</Box>
					</Box>
				</Box>
				<Box
					width={"80%"}
					borderWidth={"1"}
					borderRadius={"9.9"}
					backgroundColor={colors.muted[50]}
					marginTop={"12"}
				>
					<Box
						flexDirection={"row"}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Text padding={"2"}>Rubik 3x3x3 </Text>
						<Box marginRight={"4"}>
							<ArrowDown2
								size={"16"}
								color={colors.muted[500]}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Progress;

const styles = StyleSheet.create({});
