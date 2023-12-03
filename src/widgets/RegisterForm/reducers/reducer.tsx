import { ActionTypes } from "../enums.ts";
import { IAction, IState } from "../typings.ts";

export const reducer = (state: IState, action: IAction): IState => {
	switch(action.type) {
		case ActionTypes.CHANGE_FULLNAME:
			return {
				...state,
				fullname: action.payload,
			}
		case ActionTypes.CHANGE_USERNAME:
			return {
				...state,
				username: action.payload,
			}
		case ActionTypes.CHANGE_EMAIL:
			return {
				...state,
				email: action.payload,
			}
		case ActionTypes.CHANGE_PASSWORD:
			return {
				...state,
				password: action.payload,
			}
	}
	
	throw Error('Unknown action: ' + action.type);
};