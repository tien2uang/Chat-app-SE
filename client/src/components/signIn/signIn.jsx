import "./signIn.css";

export default function SignIn() {
  return (
    <div className="signIn">
      <div className="signInWrapper">
        <div className="signInLeft"></div>
        <div className="signInRight">
          <div>
            <h1 className="title">Welcome to our chat app</h1>
          </div>
          <div className="signInRightWrapper">
            <form className="signInBox">
              <input placeholder="Username" required className="signUpInput" />
              <input
                placeholder="Password"
                type="password"
                required
                className="signInInput"
              />
              <button className="signInButton" type="submit">
                Sign In
              </button>
              <a className="signInForgot">Forgot Password?</a>
              <button className="signInRegisterButton" onClick={() => {window.location.href = "http://localhost:3000/signUp"}}>
                Create a new account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
