import { useState } from "react";
import { useRecoilState } from "recoil";
import { toast } from "react-toastify";

import { useAuth } from "../../app/hooks/useAuth";
import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";
import { userState } from "../../atoms/userState";

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authService } = useAuth();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setUser] = useRecoilState(userState);

  const handleSignin = () => {
    authService.signin({ username, password })
      .then(res => {
        setUser(res.data);
        localStorage.setItem('user', JSON.stringify(res.data));
        toast.success('You have successfully logged in');
        setTimeout(() => window.location.reload(), 1300);
      })
      .catch(err => toast.error(err.response.data.message));
  };

  return (
    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: 15, flexDirection: 'column'}}>
      <Input
        style={{marginTop: 15}}
        label='Username'
        placeholder='@whicencer'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        width='100%'
      />
      <Input
        style={{marginTop: 15}}
        label='Password'
        placeholder='Your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        width='100%'
        type='password'
      />
      <Button style={{marginTop: 25, justifySelf: 'center'}} onClick={handleSignin}>Sign in</Button>
    </div>
  );
};
