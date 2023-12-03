import { useState } from "react";

import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      <Button style={{marginTop: 25, justifySelf: 'center'}}>Sign in</Button>
    </div>
  );
};
