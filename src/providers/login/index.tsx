import { createContext, useContext, useState } from "react";
import { LoginService } from "../../services";
import { AppStatus } from "../../shared/type/app";

export enum LogoutStatus {
    init = "init",
    success = "success",
    fail = "fail"
}

type State = {
  status? : AppStatus,
  logoutStatus?: LogoutStatus      
}

export type loginContextProps = {
    pressLoginSSO: () => void;
    state: State;
    refreshState: () => void;
    pressLogout: () => void;
}

const loginContext = createContext<loginContextProps | undefined>(undefined);

type loginProviderProps = {
    children: React.ReactNode;
}

export const LoginProvider: React.FC<loginProviderProps> = ({ children }) => {
    const initialState: State = {status: AppStatus.init, logoutStatus: LogoutStatus.init};
    const [state, setState] = useState<State>(initialState);

    const { loginBySSO, logOutSSO } = LoginService();

    const pressLoginSSO = async () => {
        refreshState();
        const isLogin = await loginBySSO();
        if (isLogin) setState({status: AppStatus.success});
        else setState({status: AppStatus.error});
    }

    const refreshState = () => setState(initialState);

    const pressLogout = async () => {
        refreshState();   
        const isLogout = await logOutSSO();
        setState({
            logoutStatus: isLogout ? LogoutStatus.success :
             LogoutStatus.fail
        });
        if (isLogout) {
            refreshState();
        }
    }

    return <>
        <loginContext.Provider value={{ state: state, 
            pressLoginSSO: pressLoginSSO, refreshState: refreshState, pressLogout: pressLogout }}>
            {children}
        </loginContext.Provider>
    </>
}

export const useLoginContext = () => {
    const context = useContext(loginContext);
    if (!context) {
        throw Error("Please wrap before using context");
    }
    return context;
};