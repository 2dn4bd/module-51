import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email,password);
        //create user in firebase using context api
        createUser(email, password)
        .them(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
        <div className="text-center ">
        <h1 className="text-5xl font-bold">Register Now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
        <form onSubmit={handleRegister} > 
        <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered" required/>
            </div>

            <div className="form-control">
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
                    Alreader user?
                    <Link to="/login" className="text-blue-500"> Please Login</Link>
                </p>
            </div>
            <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Register" />
            </div>

        </form>
        </div>
        </div>
    </div>
                </div>
        </div>
    );
};

export default Register;