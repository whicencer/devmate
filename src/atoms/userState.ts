import { atom } from "recoil";
import { IUser } from "../app/typings/IUser";

export const userState = atom({
	key: "user",
	default: {} as IUser,
});