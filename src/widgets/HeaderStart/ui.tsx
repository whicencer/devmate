import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import styles from "./styles.module.scss";
import { Button } from "../../shared/ui/Button";
import { useTheme } from "@/shared/hooks/useTheme";
import { Dispatch, FC, SetStateAction } from "react";

interface IProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

export const HeaderStart: FC<IProps> = ({ setModalOpen }) => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
      <div className={styles.header}>
        <h2>DevMate</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button style={{ marginRight: 25 }} onClick={() => setModalOpen(true)}>Get started</Button>
          {
            theme === 'light'
            ? <BsFillMoonFill cursor='pointer' onClick={changeTheme} size={20} />
            : <BsSunFill cursor='pointer' onClick={changeTheme} size={20} />
          }
        </div>
      </div>
  );
};