import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Box, Center, Row, Switch } from "native-base";
import { flexbox } from "native-base/lib/typescript/theme/styled-system";
import { IBMPlexMono_400Regular } from "@expo-google-fonts/ibm-plex-mono";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import HeaderAuth from "../components/HeaderAuth";

type Props = {};

const InformationPerson = (props: Props) => {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        width: "100%",
      }}
    >
      <Header title="Thong tin" headerLeft={false} />
      <TouchableOpacity
        style={{
          height: 72,
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 23,
          backgroundColor: "#F3F4F6",
          borderRadius: 16,
        }}
      >
        <View style={{ paddingBottom: 12, paddingTop: 12, paddingLeft: 12 }}>
          <Image
            source={require("../components/assets/Ellipse.png")}
            style={{ width: 48, height: 48 }}
          />
        </View>
        <Text
          style={{
            flex: 1,
            fontSize: 16,
            fontFamily: "IBMPlexMono_400Regular",
            paddingTop: 24,
            paddingBottom: 24,
            paddingLeft: 16,
            color: "#1F2937",
          }}
        >
          Đổi hình đại diện
        </Text>
        <View style={{ paddingRight: 12 }}>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: "#F3F4F6",
          marginTop: 16,
          width: "100%",
          borderRadius: 16,
        }}
      >
        <Box style={{ borderBottomWidth: 1, borderColor: "#E5E7EB" }}>
          <TouchableOpacity
            style={{
              height: 56,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: "#F3F4F6",
              borderRadius: 16,
            }}
          >
            <View style={{ paddingLeft: 16 }}>
              <Ionicons name="lock-closed" size={20} color="black" />
            </View>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                fontFamily: "IBMPlexMono_400Regular",
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                color: "#1F2937",
              }}
            >
              Mật khẩu
            </Text>

            <View style={{ paddingRight: 16 }}>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </Box>

        <Box style={{ borderBottomWidth: 1, borderColor: "#E5E7EB" }}>
          <TouchableOpacity
            style={{
              height: 56,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: "#F3F4F6",
              borderRadius: 16,
            }}
          >
            <View style={{ paddingLeft: 16 }}>
              <Ionicons name="lock-closed" size={20} color="black" />
            </View>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                fontFamily: "IBMPlexMono_400Regular",
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                color: "#1F2937",
              }}
            >
              Thông tin
            </Text>

            <View style={{ paddingRight: 16 }}>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </Box>

        <Box style={{ borderBottomWidth: 1, borderColor: "#E5E7EB" }}>
          <TouchableOpacity
            style={{
              height: 56,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: "#F3F4F6",
              borderRadius: 16,
            }}
          >
            <View style={{ paddingLeft: 16 }}>
              <AntDesign name="questioncircle" size={20} color="black" />
            </View>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                fontFamily: "IBMPlexMono_400Regular",
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                color: "#1F2937",
              }}
            >
              Chính sách bảo mật
            </Text>

            <View style={{ paddingRight: 16 }}>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </Box>

        <Box>
          <TouchableOpacity
            style={{
              height: 56,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: "#F3F4F6",
              borderRadius: 16,
            }}
          >
            <View style={{ paddingLeft: 16 }}>
              <Ionicons name="notifications" size={20} color="black" />
            </View>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                fontFamily: "IBMPlexMono_400Regular",
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                color: "#1F2937",
              }}
            >
              Thông báo
            </Text>

            <View style={{ paddingRight: 16 }}>
              <Switch
                onTrackColor="#EC3900"
                onThumbColor="#FFFFFF"
                offThumbColor="#FFFFFF"
                size="lg"
              />
            </View>
          </TouchableOpacity>
        </Box>
      </View>
    </View>
  );
};

export default InformationPerson;

const styles = StyleSheet.create({});
