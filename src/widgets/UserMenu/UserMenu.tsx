import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { classNames } from "../../helpers/classNames/classNames";
import styles from "./UserMenu.module.scss";
import {getUserAuthData} from "../../entities/User/model/selectors/getUserAuthData/getUserAuthData.ts";
import {MenuItemTheme, MenuListItem, PopupMenu} from "../../shared/ui/PopupMenu/PopupMenu.tsx";
import {userActions} from "../../entities/User/model/slice/userSlice.ts";
import {useTranslation} from "react-i18next";
import { FaUser } from "react-icons/fa";

interface UserMenuProps {
    className?: string;
}
export const UserMenu = ({ className = "" }: UserMenuProps) => {
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const logout = () => dispatch(userActions.logout());

  const menuList: MenuListItem[] = [
    { text: t("Log out"), onClick: logout, theme: MenuItemTheme.DANGER }
  ];

  return (
    <div>
      <PopupMenu menuList={menuList} isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
      <div className={classNames(styles.UserMenu, [className])} onClick={(e) => {
        e.stopPropagation();
        setMenuOpen(true);
      }}>
        {
          authData?.profilePicture
            ? <img src="https://i.pinimg.com/474x/32/3b/c2/323bc2e28f35a760b8d7afe48f3ffe48.jpg" alt="user_pic"/>
            : <div className={styles.profilePic}><FaUser size={25} /></div>
        }
        <div className={styles.user}>
          <h3>@{authData?.username}</h3>
          <p>{authData?.fullname}</p>
        </div>
      </div>
    </div>
  );
};