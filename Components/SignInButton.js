import React from "react";
import { TouchableOpacity, Text } from "react-native";

const SignInButton = ({ title, style }) => {
  return (
    <TouchableOpacity style={style}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default SignInButton;
