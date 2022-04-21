import { MsalAuthProvider, LoginType } from "react-aad-msal";
const tenant = "azuranianstribe.onmicrosoft.com";
const signInPolicy = "B2C_1_User_sign_in";
const applicationID = "0ff2617a-a4c1-4b69-8e97-473ed13f7bae";
const reactRedirectUri = "http://localhost:3000";
const tenantSubdomain = tenant.split(".")[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/tfp/`;
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;

// Msal Configurations
const signInConfig = {
  auth: {
    authority: signInAuthority,
    clientId: applicationID,
    redirectUri: reactRedirectUri,
    validateAuthority: false
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true
  }
};
// Authentication Parameters
const authenticationParameters = {
  scopes: []
};
// Options
const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin + "/auth.html"
};
export const signInAuthProvider = new MsalAuthProvider(
  signInConfig,
  authenticationParameters,
  options
);