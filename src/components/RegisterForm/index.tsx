import { useReducer } from "react";
import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";
import { reducer } from "./reducers/reducer";
import { IState } from "./typings";

export const RegisterForm = () => {
  const initialState: IState = {
    email: '',
    fullname: '',
    password: '',
    username: ''
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSignup = () => {
    console.log('signup ', state);
  };
  
  return (
    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: 30, flexDirection: 'column'}}>
      <Input
        label='Full name'
        placeholder='Alex Jackson'
        width='100%'
        value={state.fullname}
        onChange={(e) => dispatch({ type: 'change_fullname', payload: e.target.value })}
      />
      <Input
        style={{marginTop: 15}}
        label='E-mail'
        placeholder='alexjackson23@gmail.com'
        width='100%'
        value={state.email}
        onChange={(e) => dispatch({ type: 'change_email', payload: e.target.value })}
      />
      <Input
        style={{marginTop: 15}}
        label='Username'
        placeholder='@whicencer'
        width='100%'
        value={state.username}
        onChange={(e) => dispatch({ type: 'change_username', payload: e.target.value })}
      />
      <Input
        style={{marginTop: 15}}
        label='Password'
        placeholder='At least 8 characters'
        width='100%'
        type='password'
        minLength={8}
        value={state.password}
        onChange={(e) => dispatch({ type: 'change_password', payload: e.target.value })}
      />
      <Button style={{marginTop: 25, justifySelf: 'center'}} onClick={handleSignup}>Sign up</Button>
    </div>
  );
};
