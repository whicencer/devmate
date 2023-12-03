import { useState } from "react";

import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";
import {useTranslation} from "react-i18next";

export const LoginForm = () => {
  const {t} = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: 15, flexDirection: 'column'}}>
      <Input
        style={{marginTop: 15}}
        label={t("Username")}
        placeholder='@whicencer'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        width='100%'
      />
      <Input
        style={{marginTop: 15}}
        label={t("Password")}
        placeholder={t("Your password")}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        width='100%'
        type='password'
      />
      <Button style={{marginTop: 25, justifySelf: 'center'}}>{t("Sign in")}</Button>
    </div>
  );
};
