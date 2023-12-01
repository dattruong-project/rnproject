import { LoginProvider } from "../../providers/login"
import LoginScreen from "./loginScreen"

const LoginContainer = () => {
    return <>
        <LoginProvider>
            <LoginScreen />
        </LoginProvider>
    </>
}

export default LoginContainer;