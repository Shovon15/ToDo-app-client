import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../../assets/images/home/banner02.jpg";
import "./home.css";
const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="relative">
                <div>
                    <img src={img} alt="banner" className="w-full"></img>
                </div>
                <div className="absolute right-24  md:right-44 top-1/4 md:top-2/4 font-bold text-white text-2xl md:text-5xl">
                    <h1>To Do APP </h1>
                    <h1>Add Your Daily ToDo List</h1>
                    <Link to="/addTodoList">
                        <button className="btn btn-primary m-3 px-7">
                            Add ToDo List <FaPlus className="mx-2" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
