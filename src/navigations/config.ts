import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabsParams = {
  Home: undefined;
  Chart: undefined;
  Calendar: undefined;
  Cup: undefined;
  Profile: undefined;
};

export type AuthStackParams = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

export type RootStackParams = {
  Auth?: NavigatorScreenParams<AuthStackParams>;
  TabNav?: undefined;
  BookDetail: {
    bookId: string;
  };
};
