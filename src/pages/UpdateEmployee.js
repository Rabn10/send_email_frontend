import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateEmployee() {

    const navigate = useNavigate();
    let { id } = useParams();
    const[employee, setEmployee] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/employee/${id}`).then(res => {
            console.log(res.data.data);
            setEmployee(res.data.data);
        });
    },[id]);


const handleInput = (e) => {
    e.persist();
    setEmployee({...employee, [e.target.name] : e.target.value });
}

const updateEmployee = (e) => {
    e.preventDefault();
    const data = {
        name: employee.name,
        age: employee.age,
        position: employee.position,
        salary: employee.salary,
    }

    axios.put(`http://127.0.0.1:8000/api/employee/${id}`, data).then(res => {
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
                        <h4>Edit Employee
                            <Link to="/employees/" className="btn btn-danger float-end">Back</Link>
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={updateEmployee}>
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
                                <button type="submit" className="btn btn-primary">Update Employee</button>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    )
}

export default UpdateEmployee;