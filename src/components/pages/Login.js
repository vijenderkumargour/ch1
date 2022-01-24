import { useLocation } from "react-router-dom";

const Login = () => {
    let location = useLocation();
    console.log(location)
    return <h2>
        This is the login page! {location.state.st}

    </h2>;
};

export default Login;
