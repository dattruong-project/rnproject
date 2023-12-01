import React from "react";
import { View, TextInput, TextStyle, ViewStyle } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import fonts from "../../theme/fonts";
import { useTheme } from "@react-navigation/native";

interface IFieldWrapperProps {
    leadingIcon?: string;
    trailingIcon?: string;
    fontFamily?: string;
    iconSize?: number;
    iconColor?: string;
    inputTextStyle?: TextStyle;
    inputContainerStyle?: ViewStyle;
    placeholder?: string;
    secureEntry?: boolean;
    placeholderTextColor?: string;
}

const FieldWrapper: React.FC<IFieldWrapperProps> = ({
    leadingIcon,
    trailingIcon,
    fontFamily = fonts.poppins.regular,
    iconSize = 20,
    iconColor,
    inputTextStyle,
    inputContainerStyle,
    placeholder,
    secureEntry,
    placeholderTextColor,
    ...rest
}) => {
    const { colors } = useTheme();
    const defaultTexContainertyle: ViewStyle = {
        borderWidth: 1,
        borderColor: colors.border,
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
    };

    const defaultTextStyle: TextStyle = {
        color: colors.text,
        fontFamily: fonts.poppins.regular,
    }

    return (
        <>
            <View style={{ ...defaultTexContainertyle, ...inputContainerStyle }}>
                {leadingIcon && (
                    <Icon
                        name={leadingIcon}
                        size={iconSize}
                        color={iconColor || colors.text}
                    />
                )}
                <TextInput
                    secureTextEntry={secureEntry}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor ?? colors.text}
                    style={{
                        ...defaultTextStyle,
                        ...inputTextStyle
                    }}
                    {...rest}
                />
                {trailingIcon && (
                    <Icon
                        name={trailingIcon}
                        size={iconSize}
                        color={iconColor || colors.text}
                    />
                )}
            </View>
        </>
    );
};

export default FieldWrapper;
