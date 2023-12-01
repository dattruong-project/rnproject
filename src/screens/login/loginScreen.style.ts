import { ViewStyle, StyleSheet, Dimensions } from "react-native";

interface Style {
    backgroundImage: ViewStyle;
    container: ViewStyle;
}

const createLoginStyles = () => {
    return StyleSheet.create<Style>({
        backgroundImage: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "flex-end",
            paddingBottom: Dimensions.get("screen").height / 6,
            paddingHorizontal: 20
        },
        container: {
            flex: 1
        },
    });
};

export default createLoginStyles;
