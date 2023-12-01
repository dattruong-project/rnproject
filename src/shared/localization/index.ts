import en from "../../../i18n/en";
import vi from "../../../i18n/vi";

export enum AppLanguage {
  vi = "vi",
  en = "en"
}

export interface I18nContextType {
  language: AppLanguage;
  setLanguage: (language: AppLanguage) => void;
  i18n: {
    [key in AppLanguage]: TranslatedStrings
  };
}

export const localStrings: I18nContextType['i18n'] = {
  vi: vi,
  en: en
};
