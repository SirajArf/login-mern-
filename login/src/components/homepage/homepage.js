import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

const Homepage = ({setLoginUser}) => {

    const navigate = useNavigate();
    return (
        <div className="homepage">
            <h1>Hello Homepage-dev</h1>
            <div className="button" onClick={() =>navigate('/email')} >Email</div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage;