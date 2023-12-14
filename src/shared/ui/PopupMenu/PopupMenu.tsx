import { classNames } from "../../../helpers/classNames/classNames";
import styles from "./PopupMenu.module.scss";
import {useAwayClick} from "../../hooks/useAwayClick.ts";

export enum MenuItemTheme {
  PRIMARY = "primary",
  DANGER = "danger"
}
export interface MenuListItem {
  text: string;
  onClick: () => void;
  theme: MenuItemTheme;
}
interface PopupMenuProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  menuList: MenuListItem[]
}
export const PopupMenu = ({ className, isOpen, onClose, menuList }: PopupMenuProps) => {
  const ref = useAwayClick(onClose);

  if (!isOpen) {
    return null;
  }

  return (
    <div ref={ref} className={classNames(styles.PopupMenu, [className])}>
      {
        menuList.map(menuItem => {
          return (
              <button key={menuItem.text} onClick={menuItem.onClick} className={styles[menuItem.theme]}>{menuItem.text}</button>
          );
        })
      }
    </div>
  );
};