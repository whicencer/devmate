/* eslint-disable react-hooks/rules-of-hooks */
import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/userState";

const AuthProvider = (Component: FC) => () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setUser] = useRecoilState(userState);

  useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user') ?? 'null');

		if (user !== null) {
			setUser({
				token: user.accessToken,
				username: user.username,
			});
		}
	}, [setUser]);

  return <Component />;
};

export default AuthProvider;