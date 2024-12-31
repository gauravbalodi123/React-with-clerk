import React from 'react';
import { TiFolderOpen } from "react-icons/ti";

import { useNavigate } from 'react-router-dom';


const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
};

const Tas = (props) => {

    const navigate= useNavigate();

    const showTaskHandler=(id)=>{
     navigate(`/tasks/${id}`);
    }




    return (
        <tr>
            <td className="py-2 px-4 border border-black">{props.Summary}</td>

            <td className="py-2 px-4 border border-black">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center">
                        {getInitial(props.Assignee)}
                    </div>
                    <span>{props.Assignee}</span>
                </div>
            </td>

            <td className="py-2 px-4 border border-black">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center">
                        {getInitial(props.Reporter)}
                    </div>
                    <span>{props.Reporter}</span>
                </div>
            </td>

            <td className="py-2 px-4 border border-black">{props.Priority}</td>
            <td className="py-2 px-4 border border-black">{props.Status}</td>

            <td className="py-2 px-4 border border-black">
                <div className="flex space-x-2">
                    

                    <button onClick={()=>showTaskHandler(props.id)} className="btn btn-primary">
                        <TiFolderOpen />
                    </button>

                    
                </div>
            </td>

            
        </tr>
    );
};

export default Tas;
