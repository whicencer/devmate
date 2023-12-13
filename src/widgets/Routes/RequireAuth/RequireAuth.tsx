import {useSelector} from "react-redux";
import {useLocation, Outlet, Navigate} from "react-router-dom";
import {getUserAuthData} from "../../../entities/User/model/selectors/getUserAuthData/getUserAuthData.ts";

const RequireAuth = () => {
  const authData = useSelector(getUserAuthData);
  const location = useLocation();

  return (
      authData
        ? <Outlet />
        : <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;