import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../../app/providers/ThemeProvider/lib/useTheme.ts";
import styles from "./ChangeTheme.module.scss";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.ChangeTheme}>
      {
        theme === "app_light_theme"
        ? <BsFillMoonFill cursor="pointer" onClick={toggleTheme} size={20} />
        : <BsSunFill cursor="pointer" onClick={toggleTheme} size={20} />
      }
    </button>
  );
};

export default ChangeTheme;