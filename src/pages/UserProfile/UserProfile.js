import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="card card-compact w-auto h-auto bg-base-100 shadow-xl p-10">
            {user?.uid ? (
                <div>
                    {user?.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt="img"
                            className="w-44 h-40 rounded-full m-5 border-2 border-slate-500"
                        />
                    ) : (
                        <FaUser className="w-12 h-12 mx-4" />
                    )}
                    <h1 className="font-bold text-start m-2 text-2xl">Name: {user.displayName}</h1>
                    <h1 className="font-bold text-start m-2 text-xl">Email: {user.email}</h1>
                </div>
            ) : (
                navigate("/login")
            )}
        </div>
    );
};

export default UserProfile;
