import { Alert, View } from "react-native"
import { ButtonWrapper, SizedBox } from "../../shared/components";
import LanguageDropdown from "../../shared/components/dropdown";
import { LogoutStatus, useLoginContext } from "../../providers/login";
import { useEffect } from "react";
import { navigate } from "../../navigations/navigationHelper";
import { SCREENS } from "../../shared/constants";
import createSettingsStyles from "./settingsScreen.style";
import useLocalizedStrings from "../../providers/language/useLocalizedStrings";

const SettingScreen = () => {
    const { pressLogout, state, refreshState } = useLoginContext();
    const { logoutStatus } = state;
    const styles = createSettingsStyles();
    const strings = useLocalizedStrings();

    useEffect(() => {
        refreshState();
    },[]);

    useEffect(() => {
        if (logoutStatus === LogoutStatus.success) {
            navigate(SCREENS.LOGIN);
        }
        if (logoutStatus === LogoutStatus.fail) {
            Alert.alert(strings["failure"])
        }
    }, [logoutStatus]);

    return <>
        <View style={styles.container}>
            <View style={styles.dropdown}>
                <LanguageDropdown />
            </View>
            <SizedBox dimens={20} />
            <ButtonWrapper id="logout" buttonText={strings["logout"]} onPress={() => pressLogout()} />
        </View>
    </>
}

export default SettingScreen;