import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";

export const LoginForm = () => {
  const handleSignin = () => {
    console.log('login');
  };

  return (
    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: 15, flexDirection: 'column'}}>
      <Input
        style={{marginTop: 15}}
        label='Username'
        placeholder='@whicencer'
        width='100%'
      />
      <Input
        style={{marginTop: 15}}
        label='Password'
        placeholder='Your password'
        width='100%'
        type='password'
      />
      <Button style={{marginTop: 25, justifySelf: 'center'}} onClick={handleSignin}>Sign in</Button>
    </div>
  );
};
