import { useTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
    container: ViewStyle;
    dropdown: ViewStyle
}

const createSettingsStyles = () => {
    const {colors} = useTheme();

    return StyleSheet.create<Style>({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: "center",
            margin: 20
        },
        dropdown: {
            borderWidth: 1,
            borderColor: colors.borderColor,
            padding: 20,
            borderRadius: 20
        }
    });
};

export default createSettingsStyles;
