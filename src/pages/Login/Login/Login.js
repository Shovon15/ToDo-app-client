import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from "react-icons/fa";
import img from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const { login, setLoading, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user.email);
                setError("");
                // if (user.emailVerified) {
                //     navigate(from, { replace: true });
                // } else {
                //     // toast.error("Your email is not verified. Please verify your email address.");
                // }
                toast.success("Successfully login");
                navigate("/userprofile");
                form.reset();
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const logInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user.email);
                // from.reset();
                // navigate(from, { replace: true });
                setError("");
                // if (user.emailVerified) {
                //     navigate(from, { replace: true });
                // } else {
                //     toast.error("Your email is not verified. Please verify your email address.");
                // }
                // toast.success("Successfully login");

                navigate("/userprofile");
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    // ---------------for show/hide password----------
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    // ------------------------------------------

    return (
        <div className="hero w-full my-10">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className="w-3/4" src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl text-center font-bold text-orange-600">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="form-control relative">
                            <input
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <span onClick={togglePassword} className="cursor-pointer">
                                    {passwordShown === true ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                        </div>
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </Link>
                        </label>
                        <p className="text-red-500 py-0 text-md">{error}</p>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    {/* <p className="flex justify-center">
                        <FaGoogle className="btn w-full bg-slate-300 rounded-full p-2" />
                        Sign in with google
                    </p> */}
                    <div>
                        <button
                            onClick={logInWithGoogle}
                            className="btn flex justify-center items-center  mx-auto space-x-4 px-16 mb-3"
                        >
                            <FaGoogle className="w-5 h-5" />
                            <p>Sign in with google</p>
                        </button>
                    </div>
                    <div>
                        <button className="btn flex justify-center items-center  mx-auto space-x-2 px-16 mb-3">
                            <FaFacebookF className="w-5 h-5" />
                            <p>Sign in with Facebook</p>
                        </button>
                    </div>
                    <p className="text-center">
                        Don't have an Account!!!
                        <Link to="/signUp" className="text-orange-600 font-bold p-2 link-hover">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
