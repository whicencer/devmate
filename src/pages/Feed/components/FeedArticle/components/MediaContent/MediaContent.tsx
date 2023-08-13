import { useState } from 'react';
import { DetailImage } from '../../../../../../shared/ui/DetailImage/DetailImage';

export const MediaContent = ({ mediaContent }: { mediaContent: string }) => {
	const [detailImageVisible, setDetailImageVisible] = useState(false);

	const imageOnClick = () => {
    document.body.classList.add('openPopup');
    setDetailImageVisible(true);
  };

  return (
    <div>
			<img onClick={imageOnClick} src={mediaContent} alt='article-image' />
			<DetailImage visible={detailImageVisible} imageLink={mediaContent} close={() => setDetailImageVisible(false)} />
		</div>
  );
};