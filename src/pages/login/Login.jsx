import { Link } from "react-router-dom"
import "../login/login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="email" className="loginInput" placeholder="Enter Your Email.." required />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter Your Password" required />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    )
}