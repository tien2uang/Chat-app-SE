import "./signUp.css";

export default function SignUp() {
  return (
    <div className="signUp">
      <div className="wrapper">
        <div className="signUpLeft"></div>
        <div className="signUpRight">
          <div>
            <h1 className="title">Welcome to our chat app!</h1>
          </div>
          <div className="signUpRightWrapper">
          <form className="signUpBox">
            <input placeholder="Username" required className="signUpInput" />
            <input
              placeholder="Email"
              required
              className="signUpInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              className="signUpInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              className="signUpInput"
              type="password"
            />
            <button className="signUpButton" type="submit">
              Sign Up
            </button>
            <span className="hadAccount">You had an account ?</span>
            <button className="signUpRegisterButton" onClick={() => {window.location.href = "http://localhost:3000/signIn"}}>
                Sign In
            </button>
          </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
