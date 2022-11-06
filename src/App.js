import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Route/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <div className="bg-slate-200 min-h-screen">
            <RouterProvider router={router}></RouterProvider>
            <Toaster />
        </div>
    );
}

export default App;
