import AsyncStorageHelper, { AsyncStorageKey } from "../../shared/storage/asyncStorageHelper";
import { AuthorizeResult, EndSessionResult, authorize, logout } from "react-native-app-auth";
import { config } from "../../../auth.config";
import { AUTH_POST_LOG_OUT } from "@env";

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
                postLogoutRedirectUrl: AUTH_POST_LOG_OUT
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