import styles from './styles.module.scss';

interface IProps {
	imageLink: string;
	visible: boolean;
	close: () => void;
}

export const DetailImage = ({ imageLink, visible, close }: IProps) => {
	const handleClose = () => {
		document.body.classList.remove('openPopup');
		close();
	};

	return (
    <div onClick={handleClose} className={`${styles.wrapper} ${visible ? styles.visible : styles.hidden}`}>
			<img src={imageLink} alt="image-detail" />
    </div>
  );
};