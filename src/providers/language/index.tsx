import React, { createContext, useContext, useState } from "react";
import { AppLanguage, localStrings } from "../../shared/localization";

export type LanguageContextProps = {
  switchLanguage: (language: AppLanguage) => void;
  strings: Record<string, string>;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface Props {
  children: React.ReactElement;
}

function LanguageProvider(props: Props): React.ReactElement {
  const [selectedLanguage, setSelectedLanguage] = useState<AppLanguage>(AppLanguage.en);

  const setLanguage = (language: AppLanguage) => {
    setSelectedLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{
      switchLanguage: setLanguage,
      strings: localStrings[selectedLanguage]
    }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("Please wrap with LanguageProvider before using the context");
  }
  return context;
};

export default LanguageProvider;
