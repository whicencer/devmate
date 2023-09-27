import { useRecoilState } from "recoil";
import { AuthService } from "../../services/auth/auth.service";
import { userState } from "../../atoms/userState";

export const useAuth = () => {
	const authService = new AuthService();
	const [user] = useRecoilState(userState);

	return {authService, isAuth: !!user.token, user};
};