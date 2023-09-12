import {
    TouchableOpacity,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";
  import React from "react";
  import BackgroundLayout from "../components/BackgroundLayout";
  import { Box, Center, Row } from "native-base";
  import { flexbox } from "native-base/lib/typescript/theme/styled-system";
  import { IBMPlexMono_400Regular } from "@expo-google-fonts/ibm-plex-mono";
  
  type Props = {};
  
  const ForgotPassword2 = (props: Props) => {
    return (
      <BackgroundLayout>
        <Box paddingTop={121} justifyContent={"center"} alignItems={"center"}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "IBMPlexMono_500Medium",
              textAlign: "center",
              color: "#FFF",
            }}
          >
            Mã xác thực OTP đã được gửi tới
          </Text>
  
          <Text
            style={{
              fontSize: 16,
              fontFamily: "IBMPlexMono_500Medium",
              textAlign: "center",
              color: "#FFF",
            }}
          >
            SĐT 0345xxx467
          </Text>
        </Box>
  
        <Box
          style={{ flexDirection: "row", alignSelf: "center", paddingTop: 28 }}
        >
          <TextInput
            keyboardType="number-pad"
            textAlign="center"
            maxLength={1}
            style={{
              width: 56,
              height: 65,
              borderWidth: 1,
              borderRadius: 10,
              marginLeft: 12,
              borderColor: "#FFF",
              fontSize: 30,
              fontFamily: "IBMPlexMono_400Regular",
              color: "#FFF",
            }}
          />
          <TextInput
            keyboardType="number-pad"
            textAlign="center"
            maxLength={1}
            style={{
              width: 56,
              height: 65,
              borderWidth: 1,
              borderRadius: 10,
              marginLeft: 12,
              borderColor: "#FFF",
              fontSize: 30,
              fontFamily: "IBMPlexMono_400Regular",
              color: "#FFF",
            }}
          />
          <TextInput
            keyboardType="number-pad"
            textAlign="center"
            maxLength={1}
            style={{
              width: 56,
              height: 65,
              borderWidth: 1,
              borderRadius: 10,
              marginLeft: 12,
              borderColor: "#FFF",
              fontSize: 30,
              fontFamily: "IBMPlexMono_400Regular",
              color: "#FFF",
            }}
          />
          <TextInput
            keyboardType="number-pad"
            textAlign="center"
            maxLength={1}
            style={{
              width: 56,
              height: 65,
              borderWidth: 1,
              borderRadius: 10,
              marginLeft: 12,
              borderColor: "#FFF",
              fontSize: 30,
              fontFamily: "IBMPlexMono_400Regular",
              color: "#FFF",
            }}
          />
        </Box>
  
        <Box
          style={{ flexDirection: "row", alignSelf: "center", paddingTop: 182 }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "IBMPlexMono_400Regular",
              color: "#FFF",
            }}
          >
            Mã OTP hết hạn sau
          </Text>
  
          <Text
            style={{
              paddingLeft: 4,
              fontSize: 12,
              fontFamily: "IBMPlexMono_500Medium",
              color: "#FFF",
            }}
          >
            00:59
          </Text>
        </Box>
      </BackgroundLayout>
    );
  };
  
  export default ForgotPassword2;
  
  const styles = StyleSheet.create({});
  