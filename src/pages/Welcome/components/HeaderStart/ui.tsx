import styles from "./styles.module.scss";
import { Button } from "../../../../shared/ui/Button";
import { useTypedModalContext } from "../../hooks/useTypedModalContext";
import ChangeTheme from "../../../../shared/components/ChangeTheme";

export const HeaderStart = () => {
  const { setRegisterModalOpen } = useTypedModalContext();
  
  return (
      <div className={styles.header}>
        <h2>DevMate</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button style={{ marginRight: 25 }} onClick={() => setRegisterModalOpen(true)}>Get started</Button>
          <ChangeTheme />
        </div>
      </div>
  );
};