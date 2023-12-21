import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../app/configs/firebase";

export const uploadImage = (imageUpload: File | null) => {
	if (imageUpload === null) return;
	const imageRef = ref(storage, `images/${imageUpload.name}`);
	
	return uploadBytes(imageRef, imageUpload).then((snapshot) => {
		return getDownloadURL(snapshot.ref);
	});
};