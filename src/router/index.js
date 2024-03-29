import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Employee from "../pages/Employee";
import AddEmployee from "../pages/AddEmployee";
import UpdateEmployee from "../pages/UpdateEmployee";
// import Login from "../pages/Login";

function MyRouter() {

    return (
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about-us" element={<About/>} />
            <Route path="/contact-us" element={<Contact/>} />
            <Route path="/employees" element={<Employee/>} />
            <Route path="/employees/create" element={<AddEmployee/>} />
            <Route path="/employees/:id" element={<UpdateEmployee/>} />
            {/* <Route path="/" element={<Login />} /> */}
        </Routes>
    )
}

export default MyRouter;