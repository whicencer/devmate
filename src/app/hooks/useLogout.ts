import { useRecoilState } from "recoil";
import { userState } from "../../atoms/userState";

export const useLogout = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, setUser] = useRecoilState(userState);

	const signOut = () => {
		localStorage.setItem('user', JSON.stringify(null));
		setUser({ token: null, username: null });
		window.location.reload();
	};

	return { signOut };
};