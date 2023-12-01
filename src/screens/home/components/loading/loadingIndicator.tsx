import { ActivityIndicator, View } from "react-native"
import createHomeStyles from "../../homeScreen.style";

const LoadingIndicator = () => {
    const styles = createHomeStyles();

    return <>
        <View style={styles.centerContainer}>
            <ActivityIndicator />
        </View>
    </>
}

export default LoadingIndicator;