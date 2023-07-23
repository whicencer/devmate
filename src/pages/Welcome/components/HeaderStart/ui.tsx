import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import styles from "./styles.module.scss";
import { useTheme } from "../../../../shared/hooks/useTheme";
import { Button } from "../../../../shared/ui/Button";
import { useTypedModalContext } from "../../hooks/useTypedModalContext";

export const HeaderStart = () => {
  const { theme, setTheme } = useTheme();
  const { setRegisterModalOpen } = useTypedModalContext();
  
  const changeTheme = () => {
    setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
      <div className={styles.header}>
        <h2>DevMate</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button style={{ marginRight: 25 }} onClick={() => setRegisterModalOpen(true)}>Get started</Button>
          {
            theme === 'light'
            ? <BsFillMoonFill cursor='pointer' onClick={changeTheme} size={20} />
            : <BsSunFill cursor='pointer' onClick={changeTheme} size={20} />
          }
        </div>
      </div>
  );
};