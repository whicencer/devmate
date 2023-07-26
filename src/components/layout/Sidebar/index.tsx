import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { MdOutlineRssFeed } from "react-icons/md";
import { BiSolidBookAlt } from "react-icons/bi";
import { AiFillCode } from "react-icons/ai";
import ChangeTheme from "../../../shared/components/ChangeTheme";
import { links } from "./constants/links";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarInner}>
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
    </aside>
  );
};

export default Sidebar;