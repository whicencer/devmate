import axios from "../../app/configs/axios";
import { ISignin, ISignup } from "./auth.typings";

export class AuthService {
	async signin({ password, username }: ISignin) {
		return axios.post('/auth/signin', {password, username});
	}

	async signup({ email, fullname, password, username }: ISignup) {
		return axios.post('/auth/signup', {email, fullname, password, username});
	}
}