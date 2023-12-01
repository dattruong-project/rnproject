import React from "react";
import { Text, TextStyle } from "react-native";
import fonts from "../../theme/fonts";
import { useTheme } from "@react-navigation/native";

interface ITextWrapperProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
  style?: TextStyle;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = fonts.poppins.regular,
  color,
  children,
  style,
  ...rest
}) => {
  const theme = useTheme();
  const textColor = color || theme.colors.text; 

  return (
    <Text style={{ fontFamily, color: textColor, ...style }} {...rest}>
      {children}
    </Text>
  );
};

export default TextWrapper;
