import { AUTH_CLIENT_ID, AUTH_ISSUER, AUTH_RIDIRECT_OKTA } from "@env";
import { AuthConfiguration } from "react-native-app-auth";

export const config: AuthConfiguration = {
  clientId: AUTH_CLIENT_ID,
  redirectUrl: AUTH_RIDIRECT_OKTA,
  issuer: AUTH_ISSUER,
  scopes: ['openid', 'profile', 'offline_access'],
};