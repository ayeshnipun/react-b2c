import React from "react";
import { AuthContext } from "../context/auth-context";

class Login extends React.Component {
  render() {
    const auth = this.context;
    return (
      <div>
        {auth.isAuthenticated ? (
          <div>
            <p>Welcome {auth.account.name}</p>
            <button
              type="primary"
              className="ant-btn-login"
              block
              onClick={() => auth.onSignOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <p>Please login</p>
            <button
              type="primary"
              className="ant-btn-login"
              block
              onClick={() => auth.onSignIn()}
            >
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}

Login.contextType = AuthContext;

export default Login;
