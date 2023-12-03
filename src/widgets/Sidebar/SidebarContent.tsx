import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import ChangeTheme from "../ChangeTheme";
import {Links, links} from "./constants/links.tsx";
import {useTranslation} from "react-i18next";
import {typedTFunc} from "../../helpers/typedTFunc/typedTFunc.ts";

export const SidebarContent = () => {
  const {t} = useTranslation("home");

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
    </div>
  );
};