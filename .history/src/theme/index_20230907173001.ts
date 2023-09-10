import { extendTheme } from "native-base";

/**
 * Trong cac component co the dung useTheme
 */

export const newColorTheme = {
  primary: {
    600: "#652FAE",
    Main: "#F58216",
    Lighter: "#FDE5CE",
  },
  muted: {
    50: "#FAFAFA",
  },
};

const appTheme = extendTheme({
  colors: newColorTheme,
  fontConfig: {
    Mono: {
      300: {
        normal: "IBMPlexMono_300Light",
      },
      400: {
        normal: "IBMPlexMono_400Regular",
      },
      500: {
        normal: "IBMPlexMono_500Medium",
      },
      600: {
        normal: "IBMPlexMono_600SemiBold",
      },
      700: {
        normal: "IBMPlexMono_700Bold",
      },
    },
  },
  fonts: {
    heading: "Mono",
    body: "Mono",
    mono: "Mono",
  },
});

export type AppThemeType = typeof appTheme;
declare module "native-base" {
  interface ICustomTheme extends AppThemeType {}
}
export default appTheme;
