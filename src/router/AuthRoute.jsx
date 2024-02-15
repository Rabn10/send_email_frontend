import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import { SignUp } from "../pages/SingUp";

function AuthRoute() {

    return( 
    <Routes>
         <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
    </Routes>
    )

}

export default AuthRoute;