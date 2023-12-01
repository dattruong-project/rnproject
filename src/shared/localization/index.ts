
export enum AppLanguage {
  vi = "vi",
  en = "en"
}

export interface I18nContextType {
  language: AppLanguage;
  setLanguage: (language: AppLanguage) => void;
  i18n: {
    [key in AppLanguage]: {
      email: string;
      password: string;
      sso: string;
      logout: string;
      failure: string;
      main: string;
      setting: string;
      thatBook: string;
      id: string;
      title: string;
    };
  };
}

export const localStrings: I18nContextType['i18n'] = {
  vi: {
    email: "Email",
    password: "Mật Khẩu",
    sso: "Đăng nhập bằng SSO",
    logout: "Đăng xuất",
    failure: "Thất bại",
    main: "Trang chủ",
    setting: "Cài đặt",
    thatBook: "Danh sách",
    id: "Mã",
    title: "Tựa"
  },
  en: {
    email : "Email",
    password: "Password",
    sso: "Login By SSO",
    logout :"Log out",
    failure: "Failure",
    main: "Home",
    setting: "Settings",
    thatBook: "Here is List Book",
    id: "Id",
    title: "Title"
  },
};
