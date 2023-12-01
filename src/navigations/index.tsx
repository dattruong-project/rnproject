import { Appearance, useColorScheme } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { isReadyRef, navigationRef } from "./navigationHelper";
import { SCREENS } from "../shared/constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { palette, LightTheme, DarkTheme } from "../shared/theme/theme";
import SettingScreen from "../screens/setting";
import HomeContainer from "../screens/home";
import { useEffect, useState } from "react";
import { LoginContainer } from "../screens";

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const scheme = useColorScheme();
  const [isDarkMode, setDarkMode] = useState(scheme === "dark");
  
  useEffect((): any => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      console.log(colorScheme);
      setDarkMode(colorScheme === 'dark')
  });
    return () => (isReadyRef.current = false, subscription.remove());
  }, []);

  const renderTabIcon = (
    route: any,
    _focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = "home";
    switch (route.name) {
      case SCREENS.HOME:
        iconName = "home"
        break;
        case SCREENS.SETTING:
          iconName = "wrench";
          break;  
      default:
        break;
    }
    return (
      <Icon
        name={iconName}
        size={size}
        color={color}
      />
    );
  };

  const TabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) =>
          renderTabIcon(route, focused, color, size),
          tabBarActiveTintColor: palette.primary,
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: isDarkMode ? palette.black : palette.white,
          },
        })}
      >
         <Tab.Screen  name={SCREENS.MAIN} component={HomeContainer} />
         <Tab.Screen name={SCREENS.SETTING} component={SettingScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.LOGIN} component={LoginContainer} />
        <Stack.Screen name={SCREENS.HOME} component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

