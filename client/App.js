import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
  return (
    <StyledView className="flex-1 items-center justify-center bg-black">
      <StyledText className="text-white">Hello World</StyledText>
    </StyledView>
  );
}