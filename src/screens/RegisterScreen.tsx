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
  
  const RegisterScreen = (props: Props) => {
    return (
      <BackgroundLayout>
        <Box paddingTop={121} justifyContent={"center"} alignItems={"center"}>
          <Image
            source={require("../components/assets/Capa_1.png")}
            style={{ width: 62.4, height: 64 }}
          />
        </Box>
  
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Text style={{ fontSize: 32, fontWeight: "700", color: "#FFF" }}>
            RUBIK
          </Text>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "200",
              color: "#FFF",
              marginLeft: 5,
            }}
          >
            TRAINER
          </Text>
        </Box>
  
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={74}
          px={6}
        >
          <Box
            width={"100%"}
            height={37}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"row"}
            paddingTop={8}
            paddingBottom={8}
            borderColor={"#FFF"}
            borderBottomWidth={1}
          >
            <Image
              source={require("../components/assets/call.png")}
              style={{ width: 20, height: 20 }}
            />
            <TextInput
              placeholder="Số điện thoại"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              style={{
                color: "#FFF",
                fontFamily: "IBMPlexMono_400Regular",
                width: 306,
                height: 25,
                fontSize: 14,
                paddingLeft: 8,
                marginTop: 5,
              }}
            />
          </Box>

        
  
          <Box
            width={"100%"}
            height={37}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"row"}
            paddingTop={8}
            paddingBottom={8}
            borderColor={"#FFF"}
            borderBottomWidth={1}
          >
            <Image
              source={require("../components/assets/lock-closed.png")}
              style={{ width: 20, height: 20 }}
            />
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              style={{
                color: "#FFF",
                fontFamily: "IBMPlexMono_400Regular",
                width: 306,
                height: 25,
                fontSize: 14,
                paddingLeft: 8,
                marginTop: 5,
              }}
              secureTextEntry
            />
          </Box>

          <Box
            width={"100%"}
            height={37}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"row"}
            paddingTop={8}
            paddingBottom={8}
            borderColor={"#FFF"}
            borderBottomWidth={1}
          >
            <Image
              source={require("../components/assets/lock-closed.png")}
              style={{ width: 20, height: 20 }}
            />
            <TextInput
              placeholder="Nhập lại mật khẩu"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              style={{
                color: "#FFF",
                fontFamily: "IBMPlexMono_400Regular",
                width: 306,
                height: 25,
                fontSize: 14,
                paddingLeft: 8,
                marginTop: 5
              }}
              secureTextEntry
            />
          </Box>
        </Box>
  
        <TouchableOpacity
          style={{
            marginTop: 49,
            width: 116,
            height: 41,
            backgroundColor: "#FFF",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#652FAE",
              textAlign: "center",
              fontFamily: "IBMPlexMono_500Medium",
            }}
          >
            ĐĂNG KÝ
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={{
            width: 248,
            height: 21,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 156,
          }}
        >
          <Box style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "#FFF",
                fontFamily: "IBMPlexMono_400Regular",
                marginRight: 4,
              }}
            >
              Bạn đã có tài khoản?
            </Text>
  
            <Text
              style={{
                color: "#FFF",
                fontFamily: "IBMPlexMono_500Medium",
                textDecorationLine: "underline",
                height: 25,
              }}
            >
              ĐĂNG NHẬP
            </Text>
          </Box>
        </TouchableOpacity>
      </BackgroundLayout>
    );
  };
  
  export default RegisterScreen;
  
  const styles = StyleSheet.create({});
  