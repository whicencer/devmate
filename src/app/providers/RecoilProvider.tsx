import { FC } from "react";
import { RecoilRoot } from "recoil";

export const RecoilProvider = (Component: FC) => () => {
	return (
		<RecoilRoot>
			<Component />
		</RecoilRoot>
	);
};