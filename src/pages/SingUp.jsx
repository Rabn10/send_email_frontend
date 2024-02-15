
export const SignUp=()=> {
    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                <h1 className="text-center">Sign Up</h1>
                <p className="text-center">Please fill up this form to create an account</p>
                <div className="mb-3 mt-3">
                    <label className="form-label">Name:</label>
                    <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Enter name"
                        name="name" />
                </div>  

                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter email"
                        name="email" />
                </div>
        
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" 
                        className="form-control" 
                        id="pwd" 
                        placeholder="Enter password"
                        name="pswd" />
                </div>
                <div className="d-flex justify-content-between">
                <button type="submit"className="btn btn-primary login-button">Sign up</button>
                </div>
                </div>
            </div>
        </div>
    )
}

