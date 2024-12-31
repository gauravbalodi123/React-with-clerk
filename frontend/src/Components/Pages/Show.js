import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdDelete, MdModeEdit } from "react-icons/md";

const Show = () => {
    const params = useParams();
    const navigate = useNavigate();

    const deleteTaskHandler = (id) => {
        axios.delete(`https://task-manager-sghe.onrender.com/tasks/${id}`)
            .then(response => {
                console.log('Task deleted successfully');
                navigate('/issue');
            })
            .catch(error => {
                console.error('Error deleting task:', error);
            });
    };

    const editTaskHandler = (id) => {
        navigate(`/tasks/edit/${id}`);
    };

    const [task, setTask] = useState({
        Summary: '',
        Assignee: '',
        Reporter: '',
        Priority: '',
        Status: ''
    });

    async function fetchATask() {
        const res = await axios.get(`https://task-manager-sghe.onrender.com/tasks/${params.id}`);
        const { Summary, Assignee, Reporter, Priority, Status } = res.data;
        setTask({ Summary, Assignee, Reporter, Priority, Status });
    }

    useEffect(() => {
        fetchATask();
    }, []);

    return (
        <div className="container mt-5 p-4 bg-white rounded shadow">
            <h1 className="display-4 mb-4">{task.Summary}</h1>
            <div className="row mb-4">
                <div className="col-md-6">
                    <h2 className="h6 text-muted">Reporter</h2>
                    <p className="text-dark">{task.Reporter}</p>
                </div>
                <div className="col-md-6">
                    <h2 className="h6 text-muted">Assignee</h2>
                    <p className="text-dark">{task.Assignee}</p>
                </div>
            </div>
    
            <div className="row mb-4">
                <div className="col-md-6">
                    <h2 className="h6 text-muted">Priority</h2>
                    <p className="text-dark">{task.Priority}</p>
                </div>
                <div className="col-md-6">
                    <h2 className="h6 text-muted">Status</h2>
                    <p className="text-dark">{task.Status}</p>
                </div>
            </div>
            
            <div className="d-flex gap-3">
                <button
                    onClick={() => deleteTaskHandler(params.id)}
                    className="btn btn-danger d-flex align-items-center"
                >
                    <MdDelete className="me-2" /> Delete
                </button>
                <button
                    onClick={() => editTaskHandler(params.id)}
                    className="btn btn-success d-flex align-items-center"
                >
                    <MdModeEdit className="me-2" /> Edit
                </button>
            </div>
        </div>
    );
    
};

export default Show;
