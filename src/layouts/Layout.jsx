import { Outlet } from "react-router";
import Navbar from "../components/Navbar";



export default () => (
    <>
        <Navbar />
        <hr />
        <Outlet />
    
    </>



);