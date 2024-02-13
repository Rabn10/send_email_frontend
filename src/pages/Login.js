// import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import AuthUser from "../components/AuthUser";

function Login() {

    const {http, setToken} = AuthUser();
    // const navigate = useNavigate();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    const submitForm = () => {
        // axios.post(`http://127.0.0.1:8000/api/login`, {email:email,password:password}).then(res => {
        //     navigate('/home');
        // })
        http.post('/login',{email: email, password: password}).then((res)=> {
            // console.log(res.data);
            setToken(res.data.user,res.data.token);
        })
    }


    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter email"
                        onChange={e=>setEmail(e.target.value)} 
                        name="email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" 
                        className="form-control" 
                        id="pwd" 
                        placeholder="Enter password"
                        onChange={e=>setPassword(e.target.value)}
                        name="pswd" />
                </div>
                {/* <div className="form-check mb-3">
                    <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                    </label>
                </div> */}
                <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;