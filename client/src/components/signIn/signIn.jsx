import "./signIn.css"

export default function SignIn() {
    return (
        <div class="wrapper">
        <section class="form-sign">
            <header>Welcome to our chat app!</header>
            <div class="name-details">
                <div class="field">
                    <label>User Name</label>
                    <input type="text" placeholder="User Name" /> 
                </div>
                <div class="field">
                    <label>Password</label>
                    <input type="text" placeholder="Password" /> 
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field sign">
                    <input type="submit" value="Sign in" />
                </div>
            </div>
            <div class="link-to-sign">Don't have an account? <a href="http://localhost:3000/signUp">Sign up</a></div>
        </section>
    </div>
    ); 
}