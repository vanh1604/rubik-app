import React, { useState } from "react";
import { Button, View } from "native-base";
import { Box, Center, Text } from "native-base";
import { useTheme } from "native-base";
import Header1 from "../components/Header1";

import NonInteractiveDropdown from "../components/NonInteractiveDropdown";

const Progress = () => {
  return (
    <Box>
      <Header1 title="Tiến độ học tập" />
      <NonInteractiveDropdown title="Rubik 3x3x3" />
    </Box>
  );
};

export default Progress;
