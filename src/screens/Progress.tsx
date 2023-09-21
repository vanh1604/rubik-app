import React, { useState } from "react";
import { Button, ScrollView, View } from "native-base";
import { Box } from "native-base";
import { useTheme } from "native-base";
import Header1 from "../components/Header1";

import NonInteractiveDropdown from "../components/NonInteractiveDropdown";

const Progress = () => {
	return (
		<ScrollView>
			<Box>
				<Header1 title="Tiến độ học tập" />
				<NonInteractiveDropdown
					title="Rubik 3x3x3"
					content={["Hướng dẫn giải rubik cho người mới bắt đầu", "Hướng dẫn giải rubik cho người mới bắt đầu", "Hướng dẫn giải rubik cho người mới bắt đầu"]}
				/>
				<NonInteractiveDropdown
					title="Rubik 2x2x2"
					content={["Hướng dẫn giải rubik cho người mới bắt đầu", "Hướng dẫn giải rubik cho người mới bắt đầu", "Hướng dẫn giải rubik cho người mới bắt đầu"]}
				/>
				<NonInteractiveDropdown
					title="Rubik 4x4x4 trở lên"
					content={["Hướng dẫn giải rubik cho người mới bắt đầu", "Hướng dẫn giải rubik cho người mới bắt đầu", "Hướng dẫn giải rubik cho người mới bắt đầu"]}
				/>
				<NonInteractiveDropdown
					title="Rubik tam giác"
					content={["Hướng dẫn giải rubik cho người mới bắt đầu", "Hướng dẫn giải rubik cho người mới bắt đầu", "Hướng dẫn giải rubik cho người mới bắt đầu"]}
				/>
				<NonInteractiveDropdown
					title="Rubik gương"
					content={["Hướng dẫn giải rubik cho người mới bắt đầu", "Hướng dẫn giải rubik cho người mới bắt đầu", "Hướng dẫn giải rubik cho người mới bắt đầu"]}
				/>
			</Box>
		</ScrollView>
	);
};

export default Progress;
