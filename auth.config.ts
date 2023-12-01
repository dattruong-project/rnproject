import { AuthConfiguration } from "react-native-app-auth";

export const config: AuthConfiguration = {
  clientId: '0oa9i0cawrT7eheUz697',
  redirectUrl: 'com.okta.trial-5793302:/callback',
  issuer: 'https://trial-5793302.okta.com/oauth2/default',
  scopes: ['openid', 'profile', 'offline_access'],
};