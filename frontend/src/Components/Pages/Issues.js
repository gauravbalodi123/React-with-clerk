import React, { useState, useEffect } from 'react';
import Tas from '../Tas/Tas';
import axios from 'axios';

// this component is made to view all the issues/tasks
const Issues = () => {
    // const DUMMY_TASKS = [
    //     {
    //         Summary: 'API changes',
    //         Assignee: 'Gaurav',
    //         Reporter: 'Abhishek',
    //         Priority: 'High',
    //         Status: 'Todo'
    //     },
    //     {
    //         Summary: 'API changes',
    //         Assignee: 'Raj',
    //         Reporter: 'Aarushi',
    //         Priority: 'Medium',
    //         Status: 'Todo'
    //     },
    //     {
    //         Summary: 'API changes',
    //         Assignee: 'Ratan',
    //         Reporter: 'Kamal',
    //         Priority: 'Very High',
    //         Status: 'Todo'
    //     }
    // ];

    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getAllIssues() {
        try {
            const res = await axios.get('https://task-manager-sghe.onrender.com/allTasks')
            //    console.log(res);
            setTasks(res.data);
            setIsLoading(false);
        }
        catch (e) {
            console.log('cannot fetch issues at the moment')
        }
    }

    useEffect(() => {
        getAllIssues();
    }, [])


    return (
        <div className="p-4">
            {
                isLoading ? (
                    <p>The issues are still loading...</p>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th className="text-center">Summary</th>
                                    <th className="text-center">Assignee</th>
                                    <th className="text-center">Reporter</th>
                                    <th className="text-center">Priority</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {tasks.map((task) => (
                                    <Tas
                                        key={task._id}
                                        Summary={task.Summary}
                                        Assignee={task.Assignee}
                                        Reporter={task.Reporter}
                                        Priority={task.Priority}
                                        Status={task.Status}
                                        id={task._id}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );

};

export default Issues