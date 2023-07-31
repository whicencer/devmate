import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../../hooks/useTheme";

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      {
        theme === "light"
        ? <BsFillMoonFill cursor="pointer" onClick={changeTheme} size={20} />
        : <BsSunFill cursor="pointer" onClick={changeTheme} size={20} />
      }
    </div>
  );
};

export default ChangeTheme;