import { useState } from "react";
import { DetailImage } from "../DetailImage/DetailImage";
import styles from "./styles.module.scss";

export const MediaContent = ({ mediaContent, size }: { mediaContent: string, size?: string }) => {
	const [detailImageVisible, setDetailImageVisible] = useState(false);

	const imageOnClick = () => {
    document.body.classList.add("openPopup");
    setDetailImageVisible(true);
  };

  return (
    <div>
			<img style={{ width: size }} className={styles.image} onClick={imageOnClick} src={mediaContent} alt="article-image" />
			<DetailImage visible={detailImageVisible} imageLink={mediaContent} close={() => setDetailImageVisible(false)} />
		</div>
  );
};