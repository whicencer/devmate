import {Input} from "../../../../shared/ui/Input";
import {Button} from "../../../../shared/ui/Button";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getSignupForm} from "../../model/selectors/getSignupForm.ts";
import {signupActions} from "../../model/slice/signupForm.ts";

const SignupForm = () => {
  const {t} = useTranslation();
  const {username, fullname, password} = useSelector(getSignupForm);
  const dispatch = useDispatch();

  const changeName = (value: string) => {
    dispatch(signupActions.setFullname(value));
  };
  const changeUsername = (value: string) => {
    dispatch(signupActions.setUsername(value));
  };
  const changePassword = (value: string) => {
    dispatch(signupActions.setPassword(value));
  };

  return (
      <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: 30, flexDirection: 'column'}}>
        <Input
            label={t("Full name")}
            placeholder='Alex Jackson'
            width='100%'
            value={fullname}
            onChange={(e) => changeName(e.target.value)}
        />
        <Input
            style={{marginTop: 15}}
            label={t("Username")}
            placeholder='@whicencer'
            width='100%'
            value={username}
            onChange={(e) => changeUsername(e.target.value )}
        />
        <Input
            style={{marginTop: 15}}
            label={t("Password")}
            placeholder={t("At least 8 characters")}
            width='100%'
            type='password'
            minLength={8}
            value={password}
            onChange={(e) => changePassword(e.target.value)}
        />
        <Button style={{marginTop: 25, justifySelf: 'center'}}>{t("Sign up")}</Button>
      </div>
  );
};

export default SignupForm;