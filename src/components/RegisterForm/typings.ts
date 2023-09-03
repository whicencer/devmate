type ActionTypes = 'change_fullname' | 'change_email' | 'change_username' | 'change_password';

export interface IAction {
	type: ActionTypes,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload: any,
}

export interface IState {
	fullname: string;
	email: string;
	username: string;
	password: string;
}