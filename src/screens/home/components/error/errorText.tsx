import { View } from "react-native"
import createHomeStyles from "../../homeScreen.style";
import { TextWrapper } from "../../../../shared/components";
import useLocalizedStrings from "../../../../providers/language/useLocalizedStrings";

const ErrorText = () => {
    const styles = createHomeStyles();
    const strings = useLocalizedStrings();
    
    return <>
        <View style={styles.centerContainer}>
            <TextWrapper>{strings["failure"]}</TextWrapper>
        </View>
    </>
}

export default ErrorText;