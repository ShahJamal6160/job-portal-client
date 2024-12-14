import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    // যদি ইউজার থাকে চিল্ড্রেন টা কে দেখাবে?
    if (user) {
        return children;
    }


    // state set  করা
    return <Navigate to="/signIn" state={location?.pathname}></Navigate>
};

export default PrivateRoute;