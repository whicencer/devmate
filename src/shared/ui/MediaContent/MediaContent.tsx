import { useState } from "react";
import { DetailImage } from "../DetailImage/DetailImage";

export const MediaContent = ({ mediaContent, size }: { mediaContent: string, size?: string }) => {
	const [detailImageVisible, setDetailImageVisible] = useState(false);

	const imageOnClick = () => {
    document.body.classList.add("openPopup");
    setDetailImageVisible(true);
  };

  return (
    <div>
			<img style={{ width: size || "30%" }} onClick={imageOnClick} src={mediaContent} alt="article-image" />
			<DetailImage visible={detailImageVisible} imageLink={mediaContent} close={() => setDetailImageVisible(false)} />
		</div>
  );
};