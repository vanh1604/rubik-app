import { StyleSheet } from "react-native";
import React from "react";
import { Box, Center, Heading, Input, Row, useTheme } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { SearchNormal1 } from "iconsax-react-native";

type IconBtnProps = {
	size?: number;
	color?: string;
};

type Props = {
	title?: string;
	LeftBtn?: React.FC<IconBtnProps>;
	RightBtn?: React.FC<IconBtnProps>;
	search?: any;
};

const Header1 = ({ title, LeftBtn, RightBtn, search }: Props) => {
	const { colors } = useTheme();
	return (
		<LinearGradient colors={[colors.gradient.color1, colors.gradient.color2]}>
			<Row
				justifyContent="space-between"
				safeAreaTop
				pb="4"
				height="91"
				alignItems="flex-end"
			>
				<Center w="8">
					{LeftBtn && (
						<LeftBtn
							size={24}
							color="white"
						/>
					)}
				</Center>
				<Heading
					size="md"
					color="white"
					textAlign={"center"}
					fontWeight={500}
					fontSize={16}
				>
					{title}
				</Heading>
				<Center w="8">
					{RightBtn && (
						<RightBtn
							size={24}
							color="white"
						/>
					)}
				</Center>
			</Row>
			<Box>
				{search && (
					<Center marginBottom="5">
						<Input
							backgroundColor="white"
							borderRadius="20"
							w="80%"
							h="36"
							placeholder="Tìm kiếm"
							InputLeftElement={
								<Box marginLeft="2">
									<SearchNormal1
										size="20"
										color={colors.muted[400]}
									/>
								</Box>
							}
						/>
					</Center>
				)}
			</Box>
		</LinearGradient>
	);
};

export default Header1;

const styles = StyleSheet.create({});
