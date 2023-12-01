import { useTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
    centerContainer: ViewStyle;
    container: ViewStyle;
    item: ViewStyle;
}

const createHomeStyles = () => {
    const { colors } = useTheme();

    return StyleSheet.create<Style>({
        centerContainer: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: "center",
            alignItems: "center"
        },
        container: {
            flex: 1,
            margin: 20
        },
        item: {
           borderRadius: 10,
           borderWidth: 1,
           padding: 20,
           borderColor: colors.borderColor
        }
    });
};

export default createHomeStyles;
