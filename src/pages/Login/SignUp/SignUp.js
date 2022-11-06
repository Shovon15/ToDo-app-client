import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import img from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignUP = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name, photoURL);
                setError("");
                navigate("/userprofile");
                form.reset();
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            });
    };

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        };
        updateUserProfile(profile)
            .then(() => {})
            .catch((error) => console.error(error));
    };

    // ---------------for show/hide password----------
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    // ------------------------------------------
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className="w-3/4" src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold text-orange-600">Sign UP</h1>
                    <form onSubmit={handleSignUP} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="User name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="text"
                                name="photoURL"
                                placeholder="PhotoURL"
                                className="input input-bordered"
                                required
                            />
                        </div>
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
                            <p className="text-red-500 text-md">{error}</p>
                        </label>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Signin" />
                        </div>
                    </form>
                    <p className="text-center">
                        Already have an Account?
                        <Link to="/login" className="text-orange-600 font-bold px-2 link-hover">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
