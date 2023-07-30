import { SidebarContent } from "./SidebarContent";
import styles from "./styles.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <SidebarContent />
    </aside>
  );
};

export default Sidebar;