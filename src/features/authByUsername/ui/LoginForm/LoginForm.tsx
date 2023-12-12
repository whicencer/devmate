import {useTranslation} from "react-i18next";

import {Input} from "../../../../shared/ui/Input";
import {Button} from "../../../../shared/ui/Button";
import {useRecoilState, useRecoilValue} from "recoil";
import {loginActions, loginSlice} from "../../model/slice/loginSlice.ts";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername.ts";
import {useDispatch, useSelector} from "react-redux";
import {getLoginForm} from "../../model/selectors/getLoginForm";

const LoginForm = () => {
  const {t} = useTranslation();
  const { username, password } = useSelector(getLoginForm);
  const dispatch = useDispatch();

  const changeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value));
  };

  const changePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const handleLogin = () => {
    dispatch(loginByUsername({ username, password }));
  }

  return (
      <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: 15, flexDirection: 'column'}}>
        <Input
            style={{marginTop: 15}}
            label={t("Username")}
            placeholder='@whicencer'
            value={username}
            onChange={(e) => changeUsername(e.target.value)}
            width='100%'
        />
        <Input
            style={{marginTop: 15}}
            label={t("Password")}
            placeholder={t("Your password")}
            value={password}
            onChange={(e) => changePassword(e.target.value)}
            width='100%'
            type='password'
        />
        <Button onClick={handleLogin} style={{marginTop: 25, justifySelf: 'center'}}>{t("Sign in")}</Button>
      </div>
  );
};

export default LoginForm;