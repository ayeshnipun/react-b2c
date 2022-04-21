import logo from "./logo.svg";
import "./App.css";
import AzureAD, { AuthenticationState } from "react-aad-msal";
import { signInAuthProvider } from "./providers/auth-provider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AzureAD provider={signInAuthProvider}>
          {({ login, logout, authenticationState, error, accountInfo }) => {
            switch (authenticationState) {
              case AuthenticationState.Authenticated:
                return (
                  <p>
                    <span>Welcome, {accountInfo.account.name}!</span>
                    <button onClick={logout}>Logout</button>
                  </p>
                );
              default:
            }
          }}
        </AzureAD>
      </header>
    </div>
  );
}

export default App;
