import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div className="">
            <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Root;