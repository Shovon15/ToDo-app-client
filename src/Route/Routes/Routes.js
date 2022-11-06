import Main from "../../Layouts/Main";
import Home from "../../pages/Home/Home/Home";
import MyList from "../../pages/MyList/MyList";
import SignUp from "../../pages/Login/SignUp/SignUp";
import Login from "../../pages/Login/Login/Login";
import UserProfile from "../../pages/UserProfile/UserProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddTodoList from "../../pages/AddTodoList/AddTodoList";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/myList",
                element: (
                    <PrivateRoute>
                        <MyList></MyList>
                    </PrivateRoute>
                ),
            },
            {
                path: "/addTodoList",
                element: (
                    <PrivateRoute>
                        <AddTodoList></AddTodoList>
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>,
            },
            {
                path: "/userprofile",
                element: <UserProfile></UserProfile>,
            },
        ],
    },
]);

export default router;
