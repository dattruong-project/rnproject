import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { LogBox, Text } from "react-native";

import Navigation from "./src/navigations";
import LanguageProvider from "./src/providers/language";
import { LoginProvider } from "./src/providers/login";

LogBox.ignoreAllLogs();

const App = () => {

  return (
    <>
      <LanguageProvider>
        <LoginProvider>
          <Navigation />
        </LoginProvider>
      </LanguageProvider>
    </>
  );
};

export default App;