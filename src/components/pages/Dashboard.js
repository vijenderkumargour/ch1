import React from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    let navigate = useNavigate();
    let data={
        'name':'vaidik'
    }
    return (<>
        <h2>This is the dashboard page!</h2>
        <button onClick={()=>{navigate('/logout',{state:data})}}>Click me</button>
         </>
    );


};

export default Dashboard;
