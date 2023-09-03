import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "./atoms/userState";
import { useAuth } from "./app/hooks/useAuth";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setUser] = useRecoilState(userState);
  const { isAuth } = useAuth();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user') ?? 'null');

		if (user !== null) {
			setUser({
				token: user.accessToken,
				username: user.username,
			});
		}
	}, [setUser]);

  

  return (
    <>
      <RouterProvider router={router(isAuth)} />
    </>
  );
}

export default App;