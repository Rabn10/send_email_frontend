import { useState } from "react"
import AuthUser from "../components/AuthUser"
// import { successToast } from "../components/toast";
// import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export const SignUp=()=> {

    const navigate = useNavigate();
    const {http} = AuthUser();
    const[user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleInput = (e) => {
        e.persist();
        setUser({...user,[e.target.name]: e.target.value});
        // console.log(e.target.value);
    }

    const saveuser = (e) => {
        e.preventDefault();
        const data = {
            name: user.name,
            email: user.email,
            password: user.password,
        }

        http.post('/user',data).then((res) => {
           navigate('/');
        })
    }

    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                <h1 className="text-center">Sign Up</h1>
                <p className="text-center">Please fill up this form to create an account</p>
                <form onSubmit={saveuser}>
                <div className="mb-3 mt-3">
                    <label className="form-label">Name:</label>
                    <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Enter name"
                        name="name"
                        onChange={handleInput} />
                </div>  

                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter email"
                        name="email" 
                        onChange={handleInput} />
                </div>
        
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" 
                        className="form-control" 
                        id="pwd" 
                        placeholder="Enter password"
                        name="password"
                        onChange={handleInput} />
                </div>
                
                <div className="d-flex justify-content-between">
                <button type="submit"className="btn btn-primary login-button">Sign up</button>
                <Link type="submit"className="btn btn-danger login-button" to={'/'}>Back</Link>
                </div>
                </form>
                </div>
            </div>
        </div>
    )
}

