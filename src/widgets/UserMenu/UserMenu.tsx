import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { classNames } from "../../helpers/classNames/classNames";
import styles from "./UserMenu.module.scss";
import {getUserAuthData} from "../../entities/User/model/selectors/getUserAuthData/getUserAuthData.ts";
import {MenuItemTheme, MenuListItem, PopupMenu} from "../../shared/ui/PopupMenu/PopupMenu.tsx";
import {userActions} from "../../entities/User/model/slice/userSlice.ts";
import {useTranslation} from "react-i18next";
import {ProfilePicture} from "../../shared/ui/ProfilePicture/ProfilePicture.tsx";

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
          authData.profilePicture
            ? <img src={authData.profilePicture} alt="user_pic"/>
            : <ProfilePicture size={25} />
        }
        <div className={styles.user}>
          <h3>@{authData?.username}</h3>
          <p>{authData?.fullname}</p>
        </div>
      </div>
    </div>
  );
};