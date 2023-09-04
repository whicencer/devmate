import { useReducer } from "react";
import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";
import { reducer } from "./reducers/reducer";
import { IState } from "./typings";
import { useAuth } from "../../app/hooks/useAuth";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/userState";

export const RegisterForm = () => {
  const initialState: IState = {
    fullname: '',
    password: '',
    username: ''
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setUser] = useRecoilState(userState);
  const { authService } = useAuth();

  const handleSignup = () => {
    authService.signup(state)
      .then(res => {
        setUser(res.data);
        localStorage.setItem('user', JSON.stringify(res.data));
        window.location.reload();
      })
      .catch(err => console.log(err));
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
