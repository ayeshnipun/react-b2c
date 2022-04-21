import { MsalAuthProvider, LoginType } from "react-aad-msal";
const tenant = process.env.REACT_APP_B2C_TENANT;
const signInPolicy = process.env.REACT_APP_B2C_SIGNIN_POLICY;
const applicationID = process.env.REACT_APP_B2C_CLIENT_ID;
const reactRedirectUri = process.env.REACT_APP_B2C_REDIRECT_URL;
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