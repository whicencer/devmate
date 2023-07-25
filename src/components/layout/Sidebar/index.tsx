import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { MdOutlineRssFeed } from "react-icons/md";
import { BiSolidBookAlt } from "react-icons/bi";
import { AiFillCode } from "react-icons/ai";
import ChangeTheme from "../../../shared/components/ChangeTheme";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarInner}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '10px' }}>
          <h2>DevMate</h2>
          <ChangeTheme />
        </div>
        <nav className={styles.nav}>
          <Link to="/feed">
            <MdOutlineRssFeed size={30} className={styles.linkIcons} />
            <h3>Feed</h3>
          </Link>
          <Link to="#">
            <BiSolidBookAlt size={30} className={styles.linkIcons} />
            <h3>Learn</h3>
          </Link>
          <Link to="#">
            <AiFillCode size={30} className={styles.linkIcons} />
            <h3>Practice</h3>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;