import { StyleSheet } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Icon, IconButton, Progress, Row, Text } from "native-base";
import { quizzes } from "../../constansts/items";
import { STYLES, colors } from "../../constansts/style";
import QuizzItem from "../../components/Quizz/QuizzItem";
import QuizzDisplay from "../../components/Quizz/QuizzDisplay";
import Footer from "../../components/Quizz/Footer/Footer";

const Quizz = () => {
	const navigation = useNavigation<any>();
	const questions = quizzes;
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: true,
			title: "Câu hỏi",
		});
	});
	const [order, setOrder] = useState(1);
	const minOrder = 1;
	const maxOrder = questions.length;
	const onOrderChange = (order: number) => {
		let newOrder = order;
		if (newOrder > maxOrder) newOrder = maxOrder;
		if (newOrder < minOrder) newOrder = minOrder;

		setOrder(newOrder);
	};
	const [countdown, setCountdown] = useState(180); // Initial countdown time in seconds
	const thisAnswer = questions[order - 1];
	const ansOptions = thisAnswer.ans.map((item, index) => {
		return {
			...item,
		};
	});
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (countdown === 0) {
				clearInterval(intervalId); // Dừng đếm ngược khi đạt 0
			} else {
				setCountdown(countdown - 1);
			}
		}, 1000); // Cập nhật mỗi 1 giây

		return () => {
			clearInterval(intervalId); // Hủy bỏ interval khi component bị hủy
		};
	}, [countdown]);
	const timeFormatted = (countdown: number) => {
		const minute = Math.floor(countdown / 60);
		const second = countdown % 60;
		const formatted = (n: number) => (n < 10 && n >= 0 ? `0${n}` : `${n}`);
		const minuteFormatted = formatted(minute);
		const secondFormatted = formatted(second);
		return `${minuteFormatted}:${secondFormatted}`;
	};
	return (
		<Box
			px={6}
			bgColor={"white"}
			flex={1}
			width={"100%"}>
			<Box
				flexDirection={"row"}
				justifyContent={"space-between"}
				mt={6}>
				<Box flexDirection={"row"}>
					<Text>Thời gian </Text>
					<Text bold>{timeFormatted(countdown)}</Text>
				</Box>
				<Box height={"auto"}>
					<Text
						style={[
							STYLES.title,
							{
								textAlignVertical: "top",
							},
						]}>{`${order}/${questions.length}`}</Text>
				</Box>
			</Box>
			<Box
				w="100%"
				mb={8}>
				<Progress value={(order / questions.length) * 100} />
			</Box>
			<QuizzDisplay
				ans={ansOptions}
				order={order}
				title={thisAnswer.title}
			/>
			<Footer
				isFirst={order == 1}
				isLast={order == questions.length}
				footerLeftOptions={{
					onPress: () => {
						onOrderChange(order - 1);
					},
				}}
				footerRightOptions={{
					onPress: () => {
						onOrderChange(order + 1);
					},
				}}
			/>
		</Box>
	);
};

export default Quizz;

const styles = StyleSheet.create({});
