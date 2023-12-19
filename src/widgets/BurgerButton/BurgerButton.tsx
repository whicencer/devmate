import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./BurgerButton.module.scss";
import { CSSProperties } from "react";

interface BurgerButtonProps {
	style?: CSSProperties;
	openBurger: () => void;
}

export const BurgerButton = ({style, openBurger}: BurgerButtonProps) => {
	return (
		<button data-testid='burger-button' style={style} onClick={openBurger} className={styles.BurgerButton}>
			<GiHamburgerMenu style={{ cursor: 'pointer' }} size={30} className={styles.BurgerButtonSvg} />
		</button>
	);
};