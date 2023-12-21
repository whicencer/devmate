import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Input } from "../../shared/ui/Input";

interface ImageUploaderProps {
	setImage: Dispatch<SetStateAction<File | null>>;
}

export const ImageUploader = ({ setImage }: ImageUploaderProps) => {
	const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		
		if (event.target.files?.[0]) {
			const file = event.target.files[0];
			setImage(file);
		}

	};

	return (
		<Input
			style={{ marginTop: 15 }}
			type="file"
			label="Profile image"
			onChange={handleSubmit}
		/>
	);
};