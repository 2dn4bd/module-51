import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const {signInUser, signWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // Login user in firebase
        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate("/")
        })
        .catch(error =>{
            console.error(error.message);
        })
    }
    //google socical login
    const handleGoogleSignIn = () =>{
        signWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error.message);
        })
    }
    return (
        <div>
                        <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
        <div className="text-center ">
        <h1 className="text-5xl font-bold">Login Now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
        <form onSubmit={handleLogin} > <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered" required/>
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" required/>
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>
            <div>
                <p>
                    New user ?
                    <Link to="/register" className="text-blue-500"> Please Register</Link>
                </p>
            </div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-ghost border border-gray-500">Google</button>
            </div>
            <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
            </div>
        </form>
        </div>
        </div>
    </div>
                </div>
        </div>
    );
};

export default Login;