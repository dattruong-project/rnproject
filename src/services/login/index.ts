import AsyncStorageHelper, { AsyncStorageKey } from "../../shared/storage/asyncStorageHelper";
import { AuthorizeResult, EndSessionResult, authorize, logout } from "react-native-app-auth";
import { config } from "../../../auth.config";

const LoginService = () => {
    const asyncStorage = AsyncStorageHelper.getInstance();

    const loginBySSO = async () => {
        try {
            const authState: AuthorizeResult = await authorize(config);
            asyncStorage.setItem(AsyncStorageKey.credentials, authState);
            return true;
        } catch (error) {
            return false;
        }
    }

    const logOutSSO = async () => {
        try {
            const credentials = await asyncStorage.getItem<AuthorizeResult>(AsyncStorageKey.credentials);

            const logoutResult: EndSessionResult = await logout(config, {
                idToken: credentials!.idToken,
                postLogoutRedirectUrl: "com.okta.trial-5793302:/"
            });
            if (logoutResult) {
                asyncStorage.removeItem(AsyncStorageKey.credentials);
            }
            return true;
        } catch (error) {
            return false;
        }
    }

    return {
        loginBySSO,
        logOutSSO
    };
}

export default LoginService;