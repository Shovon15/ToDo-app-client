import React from "react";

const AddTodoList = () => {
    const handleToDoForm = () => {};
    return (
        <div className="hero w-2/3 hero-content mx-auto">
            <div className="card  w-full  shadow-2xl bg-base-100 py-10">
                <h1 className="text-5xl text-center font-bold text-orange-600">Add ToDo List</h1>
                <form onSubmit={handleToDoForm} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">ToDo Title</span>
                        </label>
                        <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="photoURL"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail about title</span>
                        </label>
                        <textarea
                            type="text"
                            name="details"
                            placeholder="details about todo list"
                            className="input input-bordered h-32"
                        />
                    </div>
                    {/* 
                    <div>
                        <label for="start">Start date:</label>

                        <input
                            type="date"
                            id="start"
                            name="trip-start"
                            value="2018-07-22"
                            min="2018-01-01"
                            max="2018-12-31"
                        />
                    </div> */}
                    {/* <p className="text-red-500 py-0 text-md">{error}</p> */}
                    <div className="form-control mt-6">
                        <input className="btn btn-primary mx-auto px-24" type="submit" value="Add to List" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTodoList;
