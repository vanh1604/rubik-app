import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Row, Text } from "native-base";
import { PlayCircle, TickCircle } from "iconsax-react-native";

const ContentDropdown = () => {
  return (
    <Box>
      <Box borderBottomColor="black" borderBottomWidth="1" py="5">
        <TouchableOpacity>
          <Box>
            <Row>
              <Box>
                <Text>Hướng dẫn giải rubik cho người mới bắt đầu</Text>
                <Row mt="5" alignItems="center">
                  <PlayCircle size="20" color="#FF8A65" />
                  <Text ml="2">24:10</Text>
                </Row>
              </Box>
              <Box>
                <TickCircle size="20" color="green" />
              </Box>
            </Row>
          </Box>
        </TouchableOpacity>
      </Box>
      <Box borderBottomColor="black" borderBottomWidth="1" py="5">
        <TouchableOpacity>
          <Box>
            <Row>
              <Box>
                <Text>Hướng dẫn giải rubik cho người mới bắt đầu</Text>
                <Row mt="5" alignItems="center">
                  <PlayCircle size="20" color="#FF8A65" />
                  <Text ml="2">24:10</Text>
                </Row>
              </Box>
              <Box>
                <TickCircle size="20" color="green" />
              </Box>
            </Row>
          </Box>
        </TouchableOpacity>
      </Box>
      <Box py="5">
        <TouchableOpacity>
          <Box>
            <Row>
              <Box>
                <Text>Hướng dẫn giải rubik cho người mới bắt đầu</Text>
                <Row mt="5" alignItems="center">
                  <PlayCircle size="20" color="#FF8A65" />
                  <Text ml="2">24:10</Text>
                </Row>
              </Box>
              <Box>
                <TickCircle size="20" color="green" />
              </Box>
            </Row>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default ContentDropdown;

const styles = StyleSheet.create({});
