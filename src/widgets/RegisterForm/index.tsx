import { useReducer } from "react";

import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";
import { reducer } from "./reducers/reducer.tsx";
import { IState } from "./typings.ts";
import {useTranslation} from "react-i18next";

export const RegisterForm = () => {
  const initialState: IState = {
    fullname: '',
    password: '',
    username: ''
  };

  const {t} = useTranslation();
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: 30, flexDirection: 'column'}}>
      <Input
        label={t("Full name")}
        placeholder='Alex Jackson'
        width='100%'
        value={state.fullname}
        onChange={(e) => dispatch({ type: 'change_fullname', payload: e.target.value })}
      />
      <Input
        style={{marginTop: 15}}
        label={t("Username")}
        placeholder='@whicencer'
        width='100%'
        value={state.username}
        onChange={(e) => dispatch({ type: 'change_username', payload: e.target.value })}
      />
      <Input
        style={{marginTop: 15}}
        label={t("Password")}
        placeholder={t("At least 8 characters")}
        width='100%'
        type='password'
        minLength={8}
        value={state.password}
        onChange={(e) => dispatch({ type: 'change_password', payload: e.target.value })}
      />
      <Button style={{marginTop: 25, justifySelf: 'center'}}>{t("Sign up")}</Button>
    </div>
  );
};
