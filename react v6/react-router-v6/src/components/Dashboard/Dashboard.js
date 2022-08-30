import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    let navigate = useNavigate()
    let data = {
        "name" : "Md Iqbal Hossain"
    }
    return (
        
        <div>
            <h2>This is dashboard</h2>
            <button onClick={()=>{
                navigate("/logout",{state: data})
            }}>LogOut</button>
        </div>
    );
};

export default Dashboard;