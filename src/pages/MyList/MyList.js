import React from "react";
import { FaPlus, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyList = () => {
    return (
        <div>
            <Link to="/addTodoList">
                <button className="btn btn-primary mt-20 mx-20">
                    Add ToDo List <FaPlus className="mx-2" />
                </button>
            </Link>
            {/*------------------------------- todo lists------------------------- */}
            <div className="hero w-2/3 hero-content mx-auto">
                <div className="flex justify-center w-2/3 mx-auto my-3 rounded-lg bg-white">
                    <div className="flex-initial w-3/12 shadow-lg">
                        <div>
                            <FaUser className=" w-12 h-12 m-auto" />
                        </div>
                    </div>
                    <div className="flex-initial w-11/12 p-7">
                        <div className="flex flex-col">
                            <h1 className="text-2xl text-center font-bold text-orange-600">title</h1>
                            <h1 className="text-md text-start font-semibold text-slate-600">
                                description of your to do list
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col w-3/12 shadow-lg m-4 space-y-3">
                        <button className="btn">Edit</button>
                        <button className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyList;
