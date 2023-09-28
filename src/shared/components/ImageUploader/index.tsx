import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { BiImageAlt } from "react-icons/bi";
import styles from "./styles.module.scss";
import { MediaContent } from "../../ui/MediaContent/MediaContent";

export const ImageUploader = ({ image, setImage }: { image: File | null, setImage: Dispatch<SetStateAction<File | null>> }) => {
	const [imageUrl, setImageUrl] = useState<string>('');
	const fileReader = new FileReader();

	fileReader.onload = () => {
		setImageUrl(fileReader.result as string);
	};

	const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		
		if (event.target.files?.[0]) {
			const file = event.target.files[0];
			setImage(file);
			fileReader.readAsDataURL(file);
		}

	};

	return (
		<>
			<input id="upload" hidden className={styles.fileInput} type="file" accept="image/*" onChange={handleSubmit} />
			<label htmlFor="upload">
				<BiImageAlt className={styles.icon} cursor="pointer" size={40} />
			</label>
			<div className={styles.preview}>
				{ image ? <MediaContent mediaContent={imageUrl} size="175px" /> : null }
				<label>{image?.name}</label>
			</div>
		</>
	);
};