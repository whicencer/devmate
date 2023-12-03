import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../../app/providers/ThemeProvider/lib/useTheme.ts";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      {
        theme === "app_light_theme"
        ? <BsFillMoonFill cursor="pointer" onClick={toggleTheme} size={20} />
        : <BsSunFill cursor="pointer" onClick={toggleTheme} size={20} />
      }
    </div>
  );
};

export default ChangeTheme;