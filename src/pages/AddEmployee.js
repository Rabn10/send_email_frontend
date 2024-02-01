import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddEmployee() {

    const navigate = useNavigate();
    const[employee, setEmployee] = useState({
        name: '',
        age: '',
        position: '',
        salary: '',
})

const handleInput = (e) => {
    e.persist();
    setEmployee({...employee, [e.target.name] : e.target.value });
}

const saveEmployee = (e) => {
    e.preventDefault();
    const data = {
        name: employee.name,
        age: employee.age,
        position: employee.position,
        salary: employee.salary,
    }

    axios.post(`http://127.0.0.1:8000/api/employee`, data).then(res => {
        alert(res.data.message);
        navigate('/employees');
    })
}



    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4>Add Employee
                            <Link to="/employees/" className="btn btn-danger float-end">Back</Link>
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={saveEmployee}>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type="text" name="name" value={employee.name} onChange={handleInput} className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label>Age</label>
                                <input type="text" name="age" value={employee.age} onChange={handleInput} className="form-control"/>
                            </div><div className="mb-3">
                                <label>Position</label>
                                <input type="text" name="position" value={employee.position} onChange={handleInput} className="form-control"/>
                            </div><div className="mb-3">
                                <label>Salary</label>
                                <input type="text" name="salary" value={employee.salary} onChange={handleInput} className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary">Save Employee</button>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddEmployee;