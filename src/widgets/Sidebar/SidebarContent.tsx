import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import ChangeTheme from "../ChangeTheme";
import { links } from "./constants/links.tsx";

export const SidebarContent = () => {
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
                  <h3>{link.label}</h3>
                </Link>
              );
            })
          }
        </nav>
      </div>
    </div>
  );
};