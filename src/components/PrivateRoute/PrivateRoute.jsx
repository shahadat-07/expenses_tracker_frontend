import { React } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   console.log("from private", isLoggedIn);
  //   useEffect(() => {
  //     const user = JSON.parse(localStorage.getItem("user"));
  //     if (user) {
  //       setIsLoggedIn(true);
  //     }
  //   }, [isLoggedIn]);
  //   const isLoggedIn = true;
  //   const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
