import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { Provider } from "react-redux";
import Root from "./src/navigations/Root";
import * as SplashScreen from "expo-splash-screen";
import store from "./src/store";
import { useEffect } from "react";
import { useFonts, IBMPlexMono_100Thin, IBMPlexMono_100Thin_Italic, IBMPlexMono_200ExtraLight, IBMPlexMono_200ExtraLight_Italic, IBMPlexMono_300Light, IBMPlexMono_300Light_Italic, IBMPlexMono_400Regular, IBMPlexMono_400Regular_Italic, IBMPlexMono_500Medium, IBMPlexMono_500Medium_Italic, IBMPlexMono_600SemiBold, IBMPlexMono_600SemiBold_Italic, IBMPlexMono_700Bold, IBMPlexMono_700Bold_Italic } from "@expo-google-fonts/ibm-plex-mono";
import appTheme from "./src/theme";

SplashScreen.preventAutoHideAsync();
export default function App() {
	let [fontsLoaded] = useFonts({
		IBMPlexMono_100Thin,
		IBMPlexMono_100Thin_Italic,
		IBMPlexMono_200ExtraLight,
		IBMPlexMono_200ExtraLight_Italic,
		IBMPlexMono_300Light,
		IBMPlexMono_300Light_Italic,
		IBMPlexMono_400Regular,
		IBMPlexMono_400Regular_Italic,
		IBMPlexMono_500Medium,
		IBMPlexMono_500Medium_Italic,
		IBMPlexMono_600SemiBold,
		IBMPlexMono_600SemiBold_Italic,
		IBMPlexMono_700Bold,
		IBMPlexMono_700Bold_Italic,
	});

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<NativeBaseProvider theme={appTheme}>
			<Provider store={store}>
				<Root />
				<StatusBar style="light" />
			</Provider>
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({});
