import { LeagueItemProps } from "../components/league/LeagueItem";
import { Calendar } from "iconsax-react-native";
export const leagueData: LeagueItemProps[] = new Array(5).fill({
  title: "Giải Rubik WCA “Hanoi Super Brain Zyo 2023”",
  leagueImage: require("../../assets/image/Logo/item_logo.png"),
  date: "10-11-2023",
  icon: <Calendar size="20" color="#FF8A65" />,
});
