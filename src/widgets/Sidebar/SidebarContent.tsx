import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import ChangeTheme from "../ChangeTheme";
import {Links, links} from "./constants/links.tsx";
import {useTranslation} from "react-i18next";
import {typedTFunc} from "../../helpers/typedTFunc/typedTFunc.ts";
import {Button} from "../../shared/ui/Button";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../entities/User/model/slice/userSlice.ts";
import {getUserAuthData} from "../../entities/User/model/selectors/getUserAuthData/getUserAuthData.ts";

export const SidebarContent = () => {
  const {t} = useTranslation("home");
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <div className={styles.sidebarInner}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '10px' }}>
          <h2>DevMate</h2>
          <ChangeTheme />
        </div>
        <nav className={styles.nav}>
          {
            links.map(link => {
              return (
                <Link key={link.path} to={link.path}>
                  {link.icon}
                  <h3>{typedTFunc<Links>(link.label, t)}</h3>
                </Link>
              );
            })
          }
        </nav>
      </div>
      <div>
        <Button onClick={handleLogout}>Log out</Button>
        <p>{authData?.username || "not authorized"}</p>
      </div>
    </div>
  );
};