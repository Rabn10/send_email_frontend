import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function Employee() {

    const[employee, setEmployee] = useState([]);
    const[loading, setLoding] = useState(true);


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/employee`).then(res => {
            setEmployee(res.data.data);
            setLoding(false);
        })
    }, [])

    const deleteEmployee = (e,id) => {
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = 'Deleting...';

        axios.delete(`http://127.0.0.1:8000/api/employee/${id}`)
        .then(res => {
            alert(res.data.message);
            thisClicked.closest('tr').remove();
        });
    }

    if(loading) {
        return (
            <Loading/>
        )
    }


    let EmployeeDetails = "";
    EmployeeDetails = employee.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.position}</td>
                <td>{item.salary}</td>
                <td>
                    <Link to={`/employees/${item.id}`} className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <Link type="button" onClick={(e) => deleteEmployee(e,item.id)} className="btn btn-danger">Delete</Link>
                </td>
            </tr>
        )
    })

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Student List
                                <Link to="/employees/create" className="btn btn-primary float-end">Add Student</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>SN</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Position</th>
                                        <th>Salary</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {EmployeeDetails}
                                </tbody>
                            </table>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee;