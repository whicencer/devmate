import { useState } from "react";
import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    console.log('signup');
  };
  
  return (
    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: 30, flexDirection: 'column'}}>
      <Input
        label='Full name'
        placeholder='Alex Jackson'
        width='100%'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        style={{marginTop: 15}}
        label='E-mail'
        placeholder='alexjackson23@gmail.com'
        width='100%'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        style={{marginTop: 15}}
        label='Username'
        placeholder='@whicencer'
        width='100%'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        style={{marginTop: 15}}
        label='Password'
        placeholder='At least 8 characters'
        width='100%'
        type='password'
        minLength={8}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button style={{marginTop: 25, justifySelf: 'center'}} onClick={handleSignup}>Sign up</Button>
    </div>
  );
};
