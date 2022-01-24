import React from 'react';
import { useLocation } from "react-router-dom";
const Logout = () => {
    let location = useLocation();
    return <h2>This is the logout page {location.state.name}</h2>;
};

export default Logout;
