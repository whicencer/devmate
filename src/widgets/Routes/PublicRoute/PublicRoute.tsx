import {useSelector} from "react-redux";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {getUserAuthData} from "../../../entities/User/model/selectors/getUserAuthData/getUserAuthData.ts";

const PublicRoute = () => {
  const authData = useSelector(getUserAuthData);
  const location = useLocation();

  return (
    !authData
      ? <Outlet />
      : <Navigate to="/feed" state={{ from: location }} replace />
  );
};

export default PublicRoute;