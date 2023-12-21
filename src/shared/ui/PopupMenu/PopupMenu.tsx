import { classNames } from "../../../helpers/classNames/classNames";
import styles from "./PopupMenu.module.scss";
import {useAwayClick} from "../../hooks/useAwayClick.ts";
import { useRef } from "react";

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
export const PopupMenu = ({ className = "", isOpen, onClose, menuList }: PopupMenuProps) => {
  const wrapperRef = useRef(null);

  useAwayClick(wrapperRef, onClose);

  if (!isOpen) {
    return null;
  }

  return (
    <div ref={wrapperRef} className={classNames(styles.PopupMenu, [className])}>
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