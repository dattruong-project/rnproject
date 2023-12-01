import { HomeProvider } from "../../providers/home";
import HomeScreen from "./homeScreen";

const HomeContainer = () => {
    return <>
        <HomeProvider>
            <HomeScreen />
        </HomeProvider>
    </>
}

export default HomeContainer;