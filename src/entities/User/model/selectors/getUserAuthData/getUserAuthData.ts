import {StateSchema} from "../../../../../app/providers/store/config/stateSchema.ts";

export const getUserAuthData = (state: StateSchema) => state.user.authData;