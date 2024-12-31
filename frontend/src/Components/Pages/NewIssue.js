import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// this is component is made for creating new tasks/issues
const NewIssue = () => {

  const navigate = useNavigate();

  const summaryRef = useRef();
  const assigneeRef = useRef();
  const reporterRef = useRef();
  const priorityRef = useRef();
  const statusRef = useRef();

  const addIssueHandler = async (e) => {
    e.preventDefault();
    //  console.log(summaryRef.current.value);
    //  console.log(priorityRef.current.value);

    // Summary,Assignee,Reporter,Priority,Status 

    const Summary = summaryRef.current.value;
    const Assignee = assigneeRef.current.value;
    const Reporter = reporterRef.current.value;
    const Priority = priorityRef.current.value
    const Status = statusRef.current.value;

    try {
      await axios.post('https://task-manager-sghe.onrender.com/addTasks', { Summary, Assignee, Reporter, Priority, Status });
      navigate('/issue');
    }
    catch (e) {
      console.log('cannot create your issue at the moment');
    }



  }



  return (
    <div className="container mt-5 p-4 bg-white rounded shadow">
        <h2 className="mb-4 text-center">Create New Issue</h2>

        <form onSubmit={addIssueHandler}>
            <div className="mb-3">
                <label className="form-label">Summary</label>
                <input
                    ref={summaryRef}
                    type="text"
                    className="form-control"
                    placeholder="Enter issue summary"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Assignee</label>
                <input
                    ref={assigneeRef}
                    type="text"
                    className="form-control"
                    placeholder="Enter assignee name"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Reporter</label>
                <input
                    ref={reporterRef}
                    type="text"
                    className="form-control"
                    placeholder="Enter reporter name"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Priority</label>
                <select ref={priorityRef} className="form-select">
                    <option value="High">High</option>
                    <option value="Very High">Very High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    <option value="Very Low">Very Low</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="form-label">Status</label>
                <select ref={statusRef} className="form-select">
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>

            <button
                type="submit"
                className="btn btn-primary w-100"
            >
                Create
            </button>
        </form>
    </div>
);

};

export default NewIssue;
