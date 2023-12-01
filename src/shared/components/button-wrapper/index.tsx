import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle, TextStyle, Text } from "react-native";
import fonts from "../../theme/fonts";
import { useTheme } from "@react-navigation/native";

interface IButtonWrapperProps {
  onPress?: () => void;
  color?: string;
  buttonText?: string;
  customTextStyle?: TextStyle;
  customContainerStyle?: ViewStyle;
  id: string | undefined
}

const ButtonWrapper: React.FC<IButtonWrapperProps> = ({
  onPress,
  color,
  buttonText,
  customTextStyle = {},
  id,
  customContainerStyle = {},
}) => {
  const theme = useTheme();
  const { colors } = theme;
  const buttonColor = color || colors.button;

  const defaultContainerStyle: ViewStyle = {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  };

  const defaultTextStyle: TextStyle = {
    fontSize: 16,
    textAlign: "center",
    fontFamily: fonts.poppins.regular,
    color: colors.buttonText,
  };

  return (
    <>
      <TouchableOpacity
        testID={id}
        onPress={onPress}
        style={[
          { backgroundColor: buttonColor },
          defaultContainerStyle,
          customContainerStyle,
        ]}>
        <Text
          style={[
            defaultTextStyle,
            customTextStyle,
          ]}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonWrapper;
