import { FC, Suspense } from "react";

export const SuspenseProvider = (Component: FC) => () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Component />
		</Suspense>
	);
};