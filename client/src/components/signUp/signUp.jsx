import "./signUp.css"

export default function SignUp() {
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
                <div class="field">
                    <label>Email</label>
                    <input type="text" placeholder="Email" /> 
                </div>
                <div class="field-image">
                    <label>Image</label>
                    <input type="file" /> 
                </div>
                <div class="field sign">
                    <input type="submit" value="Sign up" />
                </div>
            </div>
            <div class="link-to-sign">You had an account? <a href="http://localhost:3000/signIn">Sign in</a></div>
        </section>
    </div>
    ); 
}