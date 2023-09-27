type ActionTypes = 'change_fullname' | 'change_username' | 'change_password';

export interface IAction {
	type: ActionTypes,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload: any,
}

export interface IState {
	fullname: string;
	username: string;
	password: string;
}