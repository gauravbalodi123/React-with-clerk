import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
  const navigate = useNavigate();
  const params = useParams();

  const summaryRef = useRef();
  const assigneeRef = useRef();
  const reporterRef = useRef();
  const priorityRef = useRef();
  const statusRef = useRef();

  const [task, setTask] = useState({
    Summary: '',
    Assignee: '',
    Reporter: '',
    Priority: '',
    Status: ''
  });

  useEffect(() => {
    async function fetchTask() {
      try {
        const res = await axios.get(`https://task-manager-sghe.onrender.com/tasks/${params.id}`);
        const { Summary, Assignee, Reporter, Priority, Status } = res.data;
        setTask({ Summary, Assignee, Reporter, Priority, Status });
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    }
    fetchTask();
  }, [params.id]);

  const updateTaskHandler = async (e) => {
    e.preventDefault();

    const updatedTask = {
      Summary: summaryRef.current.value,
      Assignee: assigneeRef.current.value,
      Reporter: reporterRef.current.value,
      Priority: priorityRef.current.value,
      Status: statusRef.current.value
    };

    try {
      await axios.patch(`https://task-manager-sghe.onrender.com/tasks/${params.id}`, updatedTask);
      navigate(`/issue`);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <form onSubmit={updateTaskHandler} className="container mt-5 p-4 bg-light rounded shadow">
        <h1 className="h4 mb-4 text-center">EDIT TASK</h1>

        <div className="mb-3">
            <label htmlFor="summary" className="form-label">Summary</label>
            <input
                type="text"
                id="summary"
                className="form-control"
                placeholder="Enter task summary"
                ref={summaryRef}
                defaultValue={task.Summary}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="assignee" className="form-label">Assignee</label>
            <input
                type="text"
                id="assignee"
                className="form-control"
                placeholder="Enter assignee name"
                ref={assigneeRef}
                defaultValue={task.Assignee}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="reporter" className="form-label">Reporter</label>
            <input
                type="text"
                id="reporter"
                className="form-control"
                placeholder="Enter reporter name"
                ref={reporterRef}
                defaultValue={task.Reporter}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="priority" className="form-label">Priority</label>
            <select
                id="priority"
                className="form-select"
                ref={priorityRef}
                defaultValue={task.Priority}
            >
                <option value="High">High</option>
                <option value="Very High">Very High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="Very Low">Very Low</option>
            </select>
        </div>

        <div className="mb-4">
            <label htmlFor="status" className="form-label">Status</label>
            <select
                id="status"
                className="form-select"
                ref={statusRef}
                defaultValue={task.Status}
            >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
            Update
        </button>
    </form>
);

};

export default EditTask;
