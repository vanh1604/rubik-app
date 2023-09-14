import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";
import { Box, Image, Text, useTheme } from "native-base";
import { useNavigation } from "@react-navigation/native";
export interface LeagueItemProps extends TouchableOpacityProps {
  id?: string;
  title: string;
  leagueImage: any;
  date: any;
  icon: any;
}
const LeagueItem = (props: LeagueItemProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();
  const toLeagueHandler = () => {
    navigation.navigate("Content");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={toLeagueHandler}>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        backgroundColor={colors.primary[100]}
        borderRadius={16}
      >
        <Box padding={3}>
          <Image style={styles.image} source={props.leagueImage} />
        </Box>
        <Box flex={1}>
          <Box>
            <Text>{props.title}</Text>
          </Box>
          <Box flexDirection={"row"} marginTop={7}>
            {props.icon}
            <Text>{props.date}</Text>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default LeagueItem;

const styles = StyleSheet.create({
  container: {
    // marginVertical: 50,
    marginHorizontal: 10,
    marginTop: 20,
    // width: 342,
    // height: 128,
  },
  image: {
    width: 128,
    height: 104,
    borderRadius: 8,
  },
});
