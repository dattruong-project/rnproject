import { Alert, ImageBackground, View } from "react-native"
import { ButtonWrapper, FieldWrapper, SizedBox } from "../../shared/components";
import createLoginStyles from "./loginScreen.style";
import { useLoginContext } from "../../providers/login";
import { useEffect } from "react";
import { navigate } from "../../navigations/navigationHelper";
import { SCREENS } from "../../shared/constants";
import { AppStatus } from "../../shared/type/app";
import useLocalizedStrings from "../../providers/language/useLocalizedStrings";

const LoginScreen = () => {
    const styles = createLoginStyles();
    const { pressLoginSSO, state } = useLoginContext();
    const {status} = state;
    const strings = useLocalizedStrings();
    
    useEffect(() => {
        if (status === AppStatus.success) {
            navigate(SCREENS.HOME);
        } 
        if (status === AppStatus.error)  {
            Alert.alert("Failure");
        }
    },[status]);

    return <>
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage}
                source={require("../../../assets/images/background.jpg")}>
                <FieldWrapper placeholder={strings["email"]}/>
                <SizedBox dimens={20} />
                <FieldWrapper placeholder={strings["password"]} />
                <SizedBox dimens={20} />
                <ButtonWrapper id="sso" buttonText={strings["sso"]} onPress={() => pressLoginSSO()} />
            </ImageBackground>
        </View>
    </>
}

export default LoginScreen;